import {gql} from '@apollo/client';

export const CREATE_PROMO = gql`
    mutation CreatePromo($createPromoInput: CreatePromoInput!) {
        createPromo(createPromoInput: $createPromoInput) {
            uuid
            imageUrl
        }
    }
`;
