import { useQuery } from "@apollo/client";
import { GetListOfPlacesQuery } from "../../generated/graphql";
import PlaceCard from "./PlaceCard";
import { useRecoilValue } from "recoil";
import { placeAtom } from "../../atoms/selectedPlace";
import { memo, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { GET_PLACES } from "../../operations/place/query";

export const Component = memo(() => {
  const { loading, error, data } = useQuery<GetListOfPlacesQuery>(GET_PLACES);
  const navigate = useNavigate();
  const placeId = useRecoilValue(placeAtom);
  const firstTimeRender = useRef(false);

  useEffect(() => {
    if (!firstTimeRender.current && placeId) {
      firstTimeRender.current = true;
      navigate(placeId, { replace: true });
    }
  }, []);

  if (placeId) return null;
  if (loading) return <>Loading...</>;
  if (error) return <>Error! ${error.message}</>;

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
});
