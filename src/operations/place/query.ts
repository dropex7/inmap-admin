import {gql} from '@apollo/client';

export const GET_PLACES = gql`
    query GetListOfPlaces {
        places {
            uuid
            title
            logoUrl
        }
    }
`;
export const GET_PLACE = gql`
    query GetPlace($uuid: String!) {
        place(uuid: $uuid) {
            title
            logoUrl
            address
            schedule
            recs {
                title
            }
            promos {
                title
            }
        }
    }
`;
export const GET_PLACE_LAYERS = gql`
    query GetPlaceLayers($placeUuid: String!) {
        placeLayers(placeUuid: $placeUuid) {
            uuid
            fullName
        }
    }
`;
