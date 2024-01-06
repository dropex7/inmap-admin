/**
 * Created by MIRZOEV A. on 06.01.2024
 */

import {memo, useContext} from 'react';
import SelectedObjectStatus from './SelectedObjectStatus';
import SelectedLayer from './SelectedLayer';
import {MapContext} from './MapContext';
import {useRecoilValue} from 'recoil';
import {placeAtom} from '../../atoms/selectedPlace';
import {useQuery} from '@apollo/client';
import type {GetSubjectsByIdQuery} from '../../generated/graphql';
import {GET_SUBJECTS_BY_ID} from '../../operations/subject/query';

const SelectedObjectInfo = memo(() => {
    const {selectedObject} = useContext(MapContext);
    const placeUuid = useRecoilValue(placeAtom);

    const {data} = useQuery<GetSubjectsByIdQuery>(GET_SUBJECTS_BY_ID, {
        variables: {placeUuid, uuid: selectedObject?.originUuid},
    });

    return (
        <div className="card flex flex-col gap-3 p-3">
            <h3 className="m-0">{data?.subject.name}</h3>
            <SelectedObjectStatus />

            <SelectedLayer />
        </div>
    );
});

export default SelectedObjectInfo;
