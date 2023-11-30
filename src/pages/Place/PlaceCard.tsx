/**
 * Created by MIRZOEV A. on 09.04.2023
 */

import {Button} from 'antd';
import {memo, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSetRecoilState} from 'recoil';

import {placeAtom} from '../../atoms/selectedPlace';

interface PlaceCardProps {
    logo: string;
    title: string;
    uuid: string;
}

const PlaceCard = memo<PlaceCardProps>(({logo, title, uuid}) => {
    const navigate = useNavigate();
    const setPlaceId = useSetRecoilState(placeAtom);

    const handleSelectPlace = useCallback(() => {
        setPlaceId(uuid);
        navigate(uuid);
    }, [navigate, setPlaceId, uuid]);

    return (
        <div className="card flex flex-col gap-3 p-3">
            <span>{title}</span>
            <img alt="logo" height={100} src={logo} width={100} />
            <Button className="bg-blue-500" onClick={handleSelectPlace} type="primary">
                Выбрать
            </Button>
        </div>
    );
});

export default PlaceCard;
