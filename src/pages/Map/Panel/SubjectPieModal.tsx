/**
 * Created by MIRZOEV A. on 11.02.2024
 */

import {memo, useCallback, useContext, useEffect, useState} from 'react';
import {Button, Empty, Modal, Pagination, Spin} from 'antd';
import useOpen from '@/hooks/useOpen.ts';
import {useRecoilValue} from 'recoil';
import {placeAtom} from '@/atoms/selectedPlace.ts';
import usePaginationParams from '@/hooks/pagination/usePaginationParams.ts';
import usePaginationFilter from '@/hooks/pagination/usePaginationFilter.ts';
import type {PaginationParams} from '@/components/Pagination/types.ts';
import {useLazyQuery} from '@apollo/client';
import type {SearchSubjectsOfPlaceQuery} from '@/generated/graphql.ts';
import {SEARCH_SUBJECTS} from '@/operations/subject/query.ts';
import EmptyIcon from '@/assets/empty.svg?react';
import SubjectList from '@/pages/Map/Panel/SubjectList.tsx';
import {MapContext} from '@/pages/Map/MapContext.ts';
import {connectObjectWithPlace} from '@/utils/widgetMessages.ts';

interface SubjectPieModalProps {
    objectUuid: string;
}

const url = SEARCH_SUBJECTS.loc?.source.body ?? 'url';

const SubjectPieModal = memo<SubjectPieModalProps>(({objectUuid}) => {
    const {ref} = useContext(MapContext);
    const {open, onOpen, onClose} = useOpen();
    const [selectedObjectId, setSelectedObjectId] = useState<string>();
    const placeUuid = useRecoilValue(placeAtom);
    const [pageParams, setParams] = usePaginationParams(url);
    const [filter] = usePaginationFilter<PaginationParams>(url);

    const [loadList, {data, error, loading}] = useLazyQuery<SearchSubjectsOfPlaceQuery>(SEARCH_SUBJECTS, {
        variables: {searchSubjectsInput: {...pageParams, ...filter, placeUuid}},
    });

    const changePage = useCallback(
        (newPage: number) => {
            setParams({...pageParams, offset: (newPage - 1) * pageParams.limit});
        },
        [pageParams, setParams],
    );

    const handleOk = useCallback(() => {
        if (ref?.current?.contentWindow) {
            ref.current.contentWindow.postMessage(connectObjectWithPlace(objectUuid, selectedObjectId), '*');
        }
        onClose();
    }, [objectUuid, onClose, ref, selectedObjectId]);

    useEffect(() => {
        setParams({limit: 9});
    }, [setParams]);

    useEffect(() => {
        loadList({variables: {searchSubjectsInput: {...pageParams, ...filter, placeUuid}}});
    }, [filter, placeUuid, loadList, pageParams]);

    if (error) {
        return <>{error.message}</>;
    }

    return (
        <>
            <Button onClick={onOpen}>Привязать</Button>
            <Modal
                width={1000}
                title="Выбор шаблона"
                okButtonProps={{disabled: !selectedObjectId}}
                onOk={handleOk}
                open={open}
                okText="Выбрать"
                onCancel={onClose}
            >
                <Spin tip="Loading" size="large" spinning={loading}>
                    {data && data.searchSubjects.total !== 0 ? (
                        <div className="flex flex-col gap-6 p-6">
                            <div className="flex justify-end">
                                <Pagination
                                    defaultCurrent={pageParams.offset / pageParams.limit + 1}
                                    onChange={changePage}
                                    defaultPageSize={pageParams.limit}
                                    total={data.searchSubjects.total}
                                    showSizeChanger={false}
                                />
                            </div>

                            <SubjectList
                                selectedObjectId={selectedObjectId}
                                setSelectedObjectId={setSelectedObjectId}
                                data={data}
                            />
                        </div>
                    ) : (
                        <Empty
                            className="flex h-[50vh] flex-col justify-center"
                            image={<EmptyIcon />}
                            description={<span className="text-neutral-700">Создайте первый объект</span>}
                        />
                    )}
                </Spin>
            </Modal>
        </>
    );
});

export default SubjectPieModal;
