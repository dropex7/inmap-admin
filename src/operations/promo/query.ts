import {gql} from '@apollo/client';

export const GET_PROMOS = gql`
    query GetListOfPromos($input: GetPromosInput!) {
        promos(input: $input) {
            total
            items {
                uuid
                title
                subtitle
                smallImageUrl
                subtitle
                startDateTime
                endDateTime
            }
        }
    }
`;

export const GET_PROMO_BY_ID = gql`
    query GetPromoById($uuid: String!) {
        promo(uuid: $uuid) {
            uuid
            title
            subtitle
            smallImageUrl
            largeImageUrl
            subtitle
            startDateTime
            endDateTime
            content
        }
    }
`;

export const SEARCH_PROMOS = gql`
    query SearchPromos($searchPromosInput: SearchPromosInput!) {
        searchPromos(searchPromosInput: $searchPromosInput) {
            total
            items {
                uuid
                placeUuid
                smallImageUrl
                largeImageUrl
                title
                subtitle
            }
        }
    }
`;
