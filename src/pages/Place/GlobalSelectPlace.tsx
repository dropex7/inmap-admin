import {useQuery} from '@apollo/client';
import {memo, useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import {useRecoilValue} from 'recoil';

import type {GetListOfPlacesQuery} from '../../generated/graphql';

import {placeAtom} from '../../atoms/selectedPlace';
import {GET_PLACES} from '../../operations/place/query';
import PlaceCard from './PlaceCard';

export const Component = memo(() => {
    const {data, error, loading} = useQuery<GetListOfPlacesQuery>(GET_PLACES);
    const navigate = useNavigate();
    const placeId = useRecoilValue(placeAtom);
    const firstTimeRender = useRef(false);

    useEffect(() => {
        if (!firstTimeRender.current && placeId) {
            firstTimeRender.current = true;
            navigate(placeId, {replace: true});
        }
    }, [navigate, placeId]);

    if (placeId) return null;
    if (loading) return <>Loading...</>;
    if (error) return <>Error! ${error.message}</>;

    return (
        <section className="m-4 flex flex-col">
            <h1>Выбор торгового центра</h1>
            <div className="grid grid-cols-4 gap-3">
                {data?.places.map(({logoUrl, title, uuid}) => (
                    <PlaceCard key={uuid} logo={logoUrl} title={title} uuid={uuid} />
                ))}
            </div>
        </section>
    );
});
