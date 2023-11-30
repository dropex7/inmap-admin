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
