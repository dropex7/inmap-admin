import {gql} from '@apollo/client';

export const CREATE_SUBJECT = gql`
    mutation CreateSubject($createSubjectInput: CreateSubjectInput!) {
        createSubject(createSubjectInput: $createSubjectInput) {
            uuid
        }
    }
`;

export const UPDATE_SUBJECT = gql`
    mutation UpdateSubject($updateSubjectInput: UpdateSubjectInput!, $placeUuid: String!) {
        updateSubject(updateSubjectInput: $updateSubjectInput, placeUuid: $placeUuid) {
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
