/**
 * Created by MIRZOEV A. on 16.08.2023
 */

import {Select, Space} from 'antd';
import {memo, useCallback, useEffect} from 'react';
import {useRecoilState} from 'recoil';

import type {GetListOfPlacesQuery} from '@/generated/graphql.ts';

import {placeAtom} from '@/atoms/selectedPlace.ts';

interface PlaceSelectProps {
    places: GetListOfPlacesQuery['places'];
}

const {Option} = Select;

const PlaceSelect = memo<PlaceSelectProps>(({places}) => {
    const [placeId, setPlaceId] = useRecoilState(placeAtom);

    const handleChange = useCallback(
        (id: string) => {
            setPlaceId(id);
        },
        [setPlaceId],
    );

    useEffect(() => {
        if (!placeId) {
            setPlaceId(places?.[0].uuid);
        }
    }, [placeId, places, setPlaceId]);

    return (
        <Select
            className="w-60 bg-transparent"
            defaultValue={placeId}
            onChange={handleChange}
            optionLabelProp="label"
            value={placeId}
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
