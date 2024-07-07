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
            selectedPlan {
                key
            }
            initialLayerUuid
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
            shortName
        }
    }
`;

export const GET_PLACE_PLANS = gql`
    query GetPlansOfPlace($placeUuid: String!) {
        plansOfPlace(placeUuid: $placeUuid) {
            key
            title
        }
    }
`;

export const GET_PLACE_RECOMMEDATIONS = gql`
    query GetPlaceRecommendations($placeUuid: String!) {
        placeRecommendations(placeUuid: $placeUuid) {
            uuid
            icon
            image
            parent {
                uuid
            }
            title
        }
    }
`;
