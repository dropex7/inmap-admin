import {gql} from '@apollo/client';

export const CREATE_SUBJECT = gql`
    mutation CreateSubject($createSubjectInput: CreateSubjectInput!) {
        createSubject(createSubjectInput: $createSubjectInput) {
            uuid
        }
    }
`;
