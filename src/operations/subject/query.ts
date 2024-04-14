import {gql} from '@apollo/client';

export const SEARCH_SUBJECTS = gql`
    query SearchSubjectsOfPlace($searchSubjectsInput: SearchSubjectsInput!) {
        searchSubjects(searchSubjectsInput: $searchSubjectsInput) {
            total
            items {
                uuid
                name
                layerUuid
                logoUrl
                shortDescription
                images
            }
        }
    }
`;

export const SUBJECTS_OF_PLACE = gql`
    query GetSubjectsOfPlaceInput($input: GetSubjectsOfPlaceInput!) {
        subjectsOfPlace(input: $input) {
            total
            items {
                uuid
                name
                layerUuid
                logoUrl
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
            shortDescription
            images
            schedule
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

export const GET_SUBJECTS_BY_PROMO = gql`
    query GetSubjectsByPromo($placeUuid: String!, $promoUuid: String!) {
        subjectsLinkedToPromo(placeUuid: $placeUuid, promoUuid: $promoUuid) {
            uuid
            name
            logoUrl
        }
    }
`;
