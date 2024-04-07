import {gql} from '@apollo/client';

export const CREATE_PROMO = gql`
    mutation CreatePromo($createPromoInput: CreatePromoInput!) {
        createPromo(createPromoInput: $createPromoInput) {
            uuid
            smallImageUrl
        }
    }
`;

export const UPDATE_PROMO = gql`
    mutation UpdatePromo($updatePromoInput: UpdatePromoInput!) {
        updatePromo(updatePromoInput: $updatePromoInput) {
            uuid
            smallImageUrl
        }
    }
`;
