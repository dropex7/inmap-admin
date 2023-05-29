import { gql } from "@apollo/client";

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

export const GET_SUBJECTS = gql`
  query GetSubjectsOfPlace($placeUuid: String!) {
    subjectsOfPlace(placeUuid: $placeUuid) {
      uuid
      name
      layerUuid
      logoUrl
      logoBackgroundColor
      images {
        uuid
        url
        cloudinaryId
      }
    }
  }
`;
