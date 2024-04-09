import {gql} from '@apollo/client';

export const GET_TEMPLATES = gql`
    query GetListOfTemplates {
        templates {
            uuid
            name
            tabs {
                uuid
                fields
                name
            }
        }
    }
`;

export const GET_TEMPLATE_BY_ID = gql`
    query GetTemplate($uuid: String!) {
        template(uuid: $uuid) {
            uuid
            name
            tabs {
                uuid
                name
                fields
            }
        }
    }
`;
