/**
 * Created by MIRZOEV A. on 06.01.2024
 */

import {memo} from 'react';

import {useQuery} from '@apollo/client';
import type {GetSubjectsByIdQuery} from '@/generated/graphql';
import {GET_SUBJECTS_BY_ID} from '@/operations/subject/query';
import {Alert} from 'antd';
import {useGetPlaceUuid} from '@/hooks/useGetPlaceUuid.ts';
import {useGetMap} from '@/hooks/useGetMap.ts';
import SubjectInfo from '@/pages/Map/panel/card/SubjectInfo.tsx';
import SubjectStatus from '@/pages/Map/panel/card/SubjectStatus.tsx';
import SubjectPieModal from '@/pages/Map/panel/SubjectPieModal.tsx';

const SubjectPanel = memo(() => {
    const {selectedObject} = useGetMap();
    const placeUuid = useGetPlaceUuid();
    const {isEditMode} = useGetMap();

    const {data} = useQuery<GetSubjectsByIdQuery>(GET_SUBJECTS_BY_ID, {
        variables: {placeUuid, uuid: selectedObject?.originUuid},
        skip: !selectedObject?.originUuid,
    });

    return (
        <div className="flex w-96 min-w-96 flex-col gap-3 px-3">
            <div className="flex flex-col" />
            {selectedObject ? (
                <div className="flex flex-col gap-6">
                    {data ? <SubjectInfo subject={data.subject} /> : <SubjectStatus />}
                </div>
            ) : (
                <Alert
                    message="Не выбрана площадь"
                    description="Для начала работы выберите площадь на плане"
                    type="info"
                    showIcon
                />
            )}
            {isEditMode && selectedObject && <SubjectPieModal objectUuid={selectedObject.objectUuid} />}
        </div>
    );
});

export default SubjectPanel;
