/**
 * Created by MIRZOEV A. on 15.08.2023
 */

import { memo } from "react";
import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { GET_PROMOS } from "../../operations/promo/query";
import { GetListOfPromosQuery } from "../../generated/graphql";
import ListItem from "./ListItem";

interface PromoListProps {}

const PromoList = memo<PromoListProps>(({}) => {
  const { id } = useParams();
  const { loading, error, data } = useQuery<GetListOfPromosQuery>(GET_PROMOS, {
    variables: { placeUuid: id },
  });

  return (
    <div className="card flex flex-col gap-6 p-6">
      <span className="text-base font-bold">
        Действующие предложения и новости
      </span>
      <div className="grid grid-cols-[2fr_1fr_1fr] items-center">
        <div />
        <span className="text-neutral-500 text-sm leading-none text-center">
          Дата
        </span>
        <span className="text-neutral-500 text-sm leading-none text-center">
          Объекты
        </span>
      </div>
      {data?.promosOfPlace.map((promo) => (
        <ListItem key={promo.uuid} promo={promo} />
      ))}
    </div>
  );
});

export default PromoList;
