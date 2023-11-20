/**
 * Created by MIRZOEV A. on 09.08.2023
 */
import { Outlet, useNavigate, useParams } from "react-router";
import { useRecoilState } from "recoil";
import { placeAtom } from "../atoms/selectedPlace";
import { useEffect } from "react";
import { PlaceGlobalCtx } from "../pages/Place/PlaceGlobalCtx";
import { LoadingOutlined } from "@ant-design/icons";

export function Component() {
  const { id } = useParams<{ id: string }>();
  const [placeId, setPlaceId] = useRecoilState(placeAtom);
  const navigate = useNavigate();

  const hasPlace = !!placeId && placeId === id;

  useEffect(() => {
    if (!hasPlace && id) {
      setPlaceId(id);
    }
  }, [id, setPlaceId, hasPlace]);

  if (!hasPlace)
    return (
      <div className="flex flex-auto flex-col items-center justify-center">
        <LoadingOutlined />
      </div>
    );

  return (
    <PlaceGlobalCtx.Provider value={placeId}>
      <Outlet />
    </PlaceGlobalCtx.Provider>
  );
}
