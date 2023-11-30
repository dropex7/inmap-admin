import {gql} from '@apollo/client';

export const CREATE_SUBJECT = gql`
    mutation CreateSubject($createSubjectInput: CreateSubjectInput!) {
        createSubject(createSubjectInput: $createSubjectInput) {
            uuid
        }
    }
`;

export const DELETE_SUBJECT = gql`
    mutation DeleteSubject($uuid: String!, $placeUuid: String!) {
        removeSubject(uuid: $uuid, placeUuid: $placeUuid) {
            removed
        }
    }
`;
