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
            }
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
