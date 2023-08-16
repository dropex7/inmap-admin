/**
 * Created by MIRZOEV A.on 09.04.2023
 */

import { memo } from "react";
import { Link } from "react-router-dom";

import { Button } from "antd";
import { useAuth } from "../hooks/useAuth";

import { GET_PLACES } from "../operations/place/query";
import { useQuery } from "@apollo/client";
import { GetListOfPlacesQuery } from "../generated/graphql";
import PlaceSelect from "../pages/Place/PlaceSelect";

const Header = memo(() => {
  const { logout } = useAuth();
  const { data } = useQuery<GetListOfPlacesQuery>(GET_PLACES);

  return (
    <header className="flex h-header items-center gap-x-6 bg-zinc-900 border-b border-opacity-20 border-gray-300 p-6">
      <Link to="/">
        <img src="/inmap.svg" width={83} height={30} alt="inMap" />
      </Link>

      <span className="flex-auto" />

      <PlaceSelect places={data?.places ?? []} />
      <Button onClick={() => logout()}>Log out</Button>
    </header>
  );
});

export default Header;
