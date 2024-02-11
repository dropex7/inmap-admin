/**
 * Created by MIRZOEV A. on 06.01.2024
 */

import {memo, useCallback, useContext} from 'react';
import SubjectStatus from './SubjectStatus';
import {MapContext} from '../MapContext';
import {useRecoilValue} from 'recoil';
import {placeAtom} from '@/atoms/selectedPlace';
import {useQuery} from '@apollo/client';
import type {GetSubjectsByIdQuery} from '@/generated/graphql';
import {GET_SUBJECTS_BY_ID} from '@/operations/subject/query';
import {Alert, Button} from 'antd';
import {getSyncPlanMessage} from '@/utils/widgetMessages';
import {PlaceGlobalCtx} from '@/components/Place/PlaceGlobalCtx';
import SubjectInfo from './SubjectInfo';

const SubjectPanel = memo(() => {
    const {selectedObject, ref} = useContext(MapContext);
    const placeUuid = useRecoilValue(placeAtom);
    const place = useContext(PlaceGlobalCtx);

    const {data} = useQuery<GetSubjectsByIdQuery>(GET_SUBJECTS_BY_ID, {
        variables: {placeUuid, uuid: selectedObject?.originUuid},
        skip: !selectedObject?.originUuid,
    });

    const handleSavePlan = useCallback(() => {
        if (ref?.current?.contentWindow) {
            ref.current.contentWindow.postMessage(getSyncPlanMessage(placeUuid, place.selectedPlan?.key), '*');
        }
    }, [place.selectedPlan?.key, placeUuid, ref]);

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

            <Button type="primary" onClick={handleSavePlan}>
                Сохранить изменения
            </Button>
        </div>
    );
});

export default SubjectPanel;
