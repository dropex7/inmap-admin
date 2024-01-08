/**
 * Created by MIRZOEV A. on 06.01.2024
 */

import {memo, useCallback, useContext} from 'react';
import SubjectStatus from './SubjectStatus';
import {MapContext} from '../MapContext';
import {useRecoilValue} from 'recoil';
import {placeAtom} from '../../../atoms/selectedPlace';
import {useQuery} from '@apollo/client';
import type {GetSubjectsByIdQuery} from '../../../generated/graphql';
import {GET_SUBJECTS_BY_ID} from '../../../operations/subject/query';
import {Button} from 'antd';
import {getSyncPlanMessage} from '../../../utils/widgetMessages';
import {PlaceGlobalCtx} from '../../Place/PlaceGlobalCtx';
import SubjectInfo from './SubjectInfo';

const SubjectPanel = memo(() => {
    const {selectedObject, ref} = useContext(MapContext);
    const placeUuid = useRecoilValue(placeAtom);
    const place = useContext(PlaceGlobalCtx);

    const {data} = useQuery<GetSubjectsByIdQuery>(GET_SUBJECTS_BY_ID, {
        variables: {placeUuid, uuid: selectedObject?.originUuid},
    });

    const handleSavePlan = useCallback(() => {
        if (ref?.current?.contentWindow) {
            ref.current.contentWindow.postMessage(getSyncPlanMessage(placeUuid, place.selectedPlanKey), '*');
        }
    }, [place.selectedPlanKey, placeUuid, ref]);

    return (
        <div className="card flex w-96 flex-col gap-3 p-3">
            <SubjectStatus />
            {data && (
                <>
                    <SubjectInfo subject={data.subject} />
                    <Button type="primary" onClick={handleSavePlan}>
                        Сохранить изменения
                    </Button>
                </>
            )}
        </div>
    );
});

export default SubjectPanel;
