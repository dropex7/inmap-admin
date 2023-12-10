import {gql} from '@apollo/client';

export const GET_PROMOS = gql`
    query GetListOfPromos($placeUuid: String!) {
        promosOfPlace(placeUuid: $placeUuid) {
            uuid
            title
            imageUrl
            subtitle
        }
    }
`;

export const SEARCH_PROMOS = gql`
    query SearchPromos($searchPromosInput: SearchPromosInput!) {
        searchPromos(searchPromosInput: $searchPromosInput) {
            uuid
            placeUuid
            imageUrl
            title
            subtitle
        }
    }
`;
