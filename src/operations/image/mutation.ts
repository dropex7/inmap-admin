import {gql} from '@apollo/client';

export const UPLOAD_IMAGE = gql`
    mutation UploadImage($uploadInput: UploadInput!) {
        uploadImage(uploadInput: $uploadInput) {
            url
        }
    }
`;
