/**
 * Created by MIRZOEV A. on 09.04.2023
 */

import { memo, useCallback, useEffect } from "react";
import { Button } from "antd";
import { useRecoilState, useSetRecoilState } from "recoil";
import { placeAtom } from "../atoms/selectedPlace";
import { useNavigate } from "react-router";

interface PlaceCardProps {
  uuid: string;
  title: string;
  logo: string;
}

const PlaceCard = memo<PlaceCardProps>(
  ({ uuid, title, logo }): JSX.Element | null => {
    const navigate = useNavigate();
    const setPlaceId = useSetRecoilState(placeAtom);

    const handleSelectPlace = useCallback(() => {
      setPlaceId(uuid);
      navigate(uuid);
    }, []);

    return (
      <div className="card flex flex-col gap-3 p-3">
        <span>{title}</span>
        <img width={100} height={100} src={logo} alt="logo" />
        <Button
          className="bg-blue-500"
          type="primary"
          onClick={handleSelectPlace}
        >
          Выбрать
        </Button>
      </div>
    );
  }
);

export default PlaceCard;
