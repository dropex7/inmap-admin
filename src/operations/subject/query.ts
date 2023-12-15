import {gql} from '@apollo/client';

export const GET_SUBJECTS = gql`
    query GetSubjectsOfPlace($placeUuid: String!) {
        subjectsOfPlace(placeUuid: $placeUuid) {
            uuid
            name
            layerName
            logoUrl
            logoBackgroundColor
            shortDescription
            images
        }
    }
`;

export const SEARCH_SUBJECTS = gql`
    query SearchSubjectsOfPlace($searchSubjectsInput: SearchSubjectsInput!) {
        searchSubjects(searchSubjectsInput: $searchSubjectsInput) {
            total
            items {
                uuid
                name
                layerUuid
                logoUrl
                logoBackgroundColor
                shortDescription
                images
            }
        }
    }
`;

export const GET_SUBJECTS_BY_ID = gql`
    query GetSubjectsById($uuid: String!, $placeUuid: String!) {
        subject(uuid: $uuid, placeUuid: $placeUuid) {
            uuid
            name
            placeUuid
            layerUuid
            layerName
            logoUrl
            logoBackgroundColor
            shortDescription
            images
            content {
                templateUuid
                tabs {
                    templateTabUuid
                    name
                    fields
                }
            }
        }
    }
`;
