/**
 * Created by MIRZOEV A. on 11.02.2024
 */

import {memo, useCallback, useEffect, useState} from 'react';
import {App, Button, Empty, Modal, Pagination, Spin} from 'antd';
import useOpen from '@/hooks/useOpen.ts';
import usePaginationParams from '@/hooks/pagination/usePaginationParams.ts';
import usePaginationFilter from '@/hooks/pagination/usePaginationFilter.ts';
import type {PaginationParams} from '@/components/Pagination/types.ts';
import {useLazyQuery} from '@apollo/client';
import {SUBJECTS_OF_PLACE} from '@/operations/subject/query.ts';
import EmptyIcon from '@/assets/empty.svg?react';
import SubjectList from '@/pages/Map/panel/card/SubjectList.tsx';
import {connectObjectWithPlace} from '@/utils/widgetMessages.ts';
import type {GetSubjectsOfPlaceInputQuery} from '@/generated/graphql.ts';
import {useGetPlaceUuid} from '@/hooks/useGetPlaceUuid.ts';
import {useGetMap} from '@/hooks/useGetMap.ts';

interface SubjectPieModalProps {
    objectUuid: string;
}

const {useApp} = App;

const url = SUBJECTS_OF_PLACE.loc?.source.body ?? 'url';

const SubjectPieModal = memo<SubjectPieModalProps>(({objectUuid}) => {
    const {ref} = useGetMap();
    const {message} = useApp();
    const {open, onOpen, onClose} = useOpen();
    const [selectedObjectId, setSelectedObjectId] = useState<string>();
    const placeUuid = useGetPlaceUuid();
    const [pageParams, setParams] = usePaginationParams(url);
    const [filter] = usePaginationFilter<PaginationParams>(url);

    const [loadList, {data, error, loading}] = useLazyQuery<GetSubjectsOfPlaceInputQuery>(SUBJECTS_OF_PLACE, {
        variables: {input: {...pageParams, ...filter, placeUuid}},
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
        message.success('Объект привязан к области');
        onClose();
    }, [message, objectUuid, onClose, ref, selectedObjectId]);

    useEffect(() => {
        setParams({limit: 9});
    }, [setParams]);

    useEffect(() => {
        loadList({variables: {input: {...pageParams, ...filter, placeUuid}}});
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
                    {data && data.subjectsOfPlace.total !== 0 ? (
                        <div className="flex flex-col gap-6 p-6">
                            <div className="flex justify-end">
                                <Pagination
                                    defaultCurrent={pageParams.offset / pageParams.limit + 1}
                                    onChange={changePage}
                                    defaultPageSize={pageParams.limit}
                                    total={data.subjectsOfPlace.total}
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
