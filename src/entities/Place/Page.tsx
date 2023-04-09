import { useQuery } from "@apollo/client";
import { GetPlaceQuery } from "../../generated/graphql";
import { GET_PLACE } from "../../operations";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";

export function Component() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, error } = useQuery<GetPlaceQuery>(GET_PLACE, {
    variables: { uuid: id },
  });

  useEffect(() => {
    if (error) {
      navigate("..");
    }
  }, [error]);

  if (!data) {
    return <>loading...</>;
  }

  return (
    <section className="grid min-h-screen place-content-center">
      <div className="flex flex-col gap-y-4 rounded-lg border bg-white p-4">
        <div>{data.place.title}</div>
        <div>{data.place.address}</div>
        <img width={100} height={100} src={data.place.logoUrl} alt="logo" />
        <div>В одном приложении</div>
      </div>
    </section>
  );
}
