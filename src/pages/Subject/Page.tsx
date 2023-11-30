/**
 * Created by MIRZOEV A. on 26.11.2023
 */
import {useQuery} from '@apollo/client';
import {useParams} from 'react-router-dom';

import type {GetSubjectsByIdQuery} from '../../generated/graphql';

import {GET_SUBJECTS_BY_ID} from '../../operations/subject/query';

export function Component() {
    const {id, subjectId} = useParams();

    const {data} = useQuery<GetSubjectsByIdQuery>(GET_SUBJECTS_BY_ID, {
        variables: {placeUuid: id, uuid: subjectId},
    });

    return <>{JSON.stringify(data)}</>;
}
