/**
 * Created by MIRZOEV A. on 16.08.2023
 */

import { memo, useCallback, useMemo } from "react";
import { useRecoilState } from "recoil";
import { placeAtom } from "../../atoms/selectedPlace";
import { GetListOfPlacesQuery } from "../../generated/graphql";
import { Select, Space } from "antd";
import { useNavigate } from "react-router";

interface PlaceSelectProps {
  places: GetListOfPlacesQuery["places"];
}

const { Option } = Select;

const PlaceSelect = memo<PlaceSelectProps>(({ places }) => {
  const [placeId, setPlaceId] = useRecoilState(placeAtom);
  const navigate = useNavigate();

  const selectedSubject = useMemo(
    () => places.find(({ uuid }) => uuid === placeId),
    [places, placeId]
  );

  const handleChange = useCallback((id: string) => {
    navigate(`/subject/${id}`);
    setPlaceId(id);
  }, []);

  return (
    <Select
      className="w-60"
      defaultValue={selectedSubject?.uuid}
      value={selectedSubject?.uuid}
      onChange={handleChange}
      optionLabelProp="label"
    >
      {places.map(({ uuid, title, logoUrl }) => (
        <Option key={uuid} value={uuid} label={title}>
          <Space>
            <span role="img" aria-label={title}>
              <img src={logoUrl} alt={title} width={15} height={15} />
            </span>
            {title}
          </Space>
        </Option>
      ))}
    </Select>
  );
});

export default PlaceSelect;
