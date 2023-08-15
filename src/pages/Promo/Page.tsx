/**
 * Created by MIRZOEV A. on 15.08.2023
 */
import "react-quill/dist/quill.snow.css";
import SearchBar from "./SearchBar";
import { useQuery } from "@apollo/client";
import { GET_PROMOS } from "../../operations/promo/query";
import { useParams } from "react-router";
import PromoList from "./PromoList";

export function Component() {
  return (
    <div className="flex flex-col gap-3">
      <SearchBar />
      <PromoList />
    </div>
  );
}
