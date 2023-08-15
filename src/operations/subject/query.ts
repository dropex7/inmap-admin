import { gql } from "@apollo/client";

export const GET_SUBJECTS = gql`
  query GetSubjectsOfPlace($placeUuid: String!) {
    subjectsOfPlace(placeUuid: $placeUuid) {
      uuid
      name
      layerName
      logoUrl
      logoBackgroundColor
      shortDescription
      images {
        uuid
        url
        cloudinaryId
      }
    }
  }
`;
export const CREATE_SUBJECT = gql`
  mutation CreateSubject($createSubjectInput: CreateSubjectInput!) {
    createSubject(createSubjectInput: $createSubjectInput) {
      uuid
    }
  }
`;
