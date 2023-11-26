/**
 * Created by MIRZOEV A. on 26.11.2023
 */
import { useQuery } from "@apollo/client";
import { GetSubjectsByIdQuery } from "../../generated/graphql";
import { GET_SUBJECTS_BY_ID } from "../../operations/subject/query";
import { useParams } from "react-router";

export function Component() {
  const { id, subjectId } = useParams();

  const { data, loading, error } = useQuery<GetSubjectsByIdQuery>(
    GET_SUBJECTS_BY_ID,
    {
      variables: { placeUuid: id, uuid: subjectId },
    }
  );

  return <>{JSON.stringify(data)}</>;
}
