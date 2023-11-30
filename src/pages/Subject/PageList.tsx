import {useQuery} from '@apollo/client';
import {Spin} from 'antd';
import {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import type {GetSubjectsOfPlaceQuery} from '../../generated/graphql';

import {GET_SUBJECTS} from '../../operations/subject/query';
import List from './List';
import SearchBar from './SearchBar';

export function Component() {
    const {id} = useParams();
    const navigate = useNavigate();

    const {data, error, loading} = useQuery<GetSubjectsOfPlaceQuery>(GET_SUBJECTS, {
        variables: {placeUuid: id},
    });

    useEffect(() => {
        if (error) {
            navigate('..');
        }
    }, [navigate, error]);

    return (
        <section className="flex flex-col gap-4">
            <SearchBar />

            <Spin size="large" spinning={loading} tip="Loading">
                <div className="card flex-col gap-6">{data && <List data={data} />}</div>
            </Spin>
        </section>
    );
}
