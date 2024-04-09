import {gql} from '@apollo/client';

export const UPDATE_PLACE_PLAN = gql`
    mutation UpdatePlacePlan($updatePlaceInput: UpdatePlaceInput!) {
        updatePlace(updatePlaceInput: $updatePlaceInput) {
            uuid
            selectedPlan {
                key
            }
        }
    }
`;
