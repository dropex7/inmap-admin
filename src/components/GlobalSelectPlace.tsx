import { useQuery } from "@apollo/client";
import { GET_PLACES } from "../operations";
import { GetListOfPlacesQuery } from "../generated/graphql";
import PlaceCard from "./PlaceCard";
import { useRecoilValue } from "recoil";
import { placeAtom } from "../atoms/selectedPlace";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export function Component() {
  const { loading, error, data } = useQuery<GetListOfPlacesQuery>(GET_PLACES);
  const navigate = useNavigate();
  const placeId = useRecoilValue(placeAtom);

  useEffect(() => {
    if (placeId) {
      navigate(placeId, { replace: true });
    }
  }, [placeId]);

  if (loading) return <>Loading...</>;
  if (error) return <>Error! ${error.message}</>;

  if (!placeId) {
    return (
      <section className="flex flex-col m-4">
        <h1>Выбор торгового центра</h1>
        <div className="grid grid-cols-4 gap-3">
          {data?.places.map(({ uuid, title, logoUrl }) => (
            <PlaceCard key={uuid} uuid={uuid} title={title} logo={logoUrl} />
          ))}
        </div>
      </section>
    );
  }

  return <></>;
}
