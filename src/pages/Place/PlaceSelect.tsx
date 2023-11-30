/**
 * Created by MIRZOEV A. on 16.08.2023
 */

import {Select, Space} from 'antd';
import {memo, useCallback, useMemo} from 'react';
import {useNavigate} from 'react-router-dom';
import {useRecoilState} from 'recoil';

import type {GetListOfPlacesQuery} from '../../generated/graphql';

import {placeAtom} from '../../atoms/selectedPlace';

interface PlaceSelectProps {
    places: GetListOfPlacesQuery['places'];
}

const {Option} = Select;

const PlaceSelect = memo<PlaceSelectProps>(({places}) => {
    const [placeId, setPlaceId] = useRecoilState(placeAtom);
    const navigate = useNavigate();

    const selectedSubject = useMemo(() => places.find(({uuid}) => uuid === placeId), [places, placeId]);

    const handleChange = useCallback(
        (id: string) => {
            navigate(`/subject/${id}`);
            setPlaceId(id);
        },
        [navigate, setPlaceId],
    );

    return (
        <Select
            className="w-60"
            defaultValue={selectedSubject?.uuid}
            onChange={handleChange}
            optionLabelProp="label"
            value={selectedSubject?.uuid}
        >
            {places.map(({logoUrl, title, uuid}) => (
                <Option key={uuid} label={title} value={uuid}>
                    <Space>
                        <span aria-label={title} role="img">
                            <img alt={title} height={15} src={logoUrl} width={15} />
                        </span>
                        {title}
                    </Space>
                </Option>
            ))}
        </Select>
    );
});

export default PlaceSelect;
