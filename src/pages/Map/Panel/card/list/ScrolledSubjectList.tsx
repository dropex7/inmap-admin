/**
 * Created by MIRZOEV A. on 09.05.2024
 */

import {memo, useCallback} from 'react';
import {Divider, Skeleton} from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import {useGetPlaceUuid} from '@/hooks/useGetPlaceUuid.ts';
import usePaginationParams from '@/hooks/pagination/usePaginationParams.ts';
import usePaginationFilter from '@/hooks/pagination/usePaginationFilter.ts';
import type {PaginationParams} from '@/components/Pagination/types.ts';
import {useQuery} from '@apollo/client';
import type {GetSubjectsOfPlaceInputQuery} from '@/generated/graphql.ts';
import {SUBJECTS_OF_PLACE} from '@/operations/subject/query.ts';
import {SCROLLED_SUBJECTS_OF_PLACE_KEY} from '@/utils/queryFilterKeys.ts';
import {useMap} from '@/hooks/useMap.ts';
import ListView from '@/pages/Map/panel/card/list/ListView.tsx';

const ScrolledSubjectList = memo(() => {
    const {selectedLayerUuid} = useMap();
    const placeUuid = useGetPlaceUuid();
    const [pageParams, setParams] = usePaginationParams(SCROLLED_SUBJECTS_OF_PLACE_KEY);
    const [filter] = usePaginationFilter<PaginationParams>(SCROLLED_SUBJECTS_OF_PLACE_KEY);

    const {data, previousData, error, loading, fetchMore} = useQuery<GetSubjectsOfPlaceInputQuery>(SUBJECTS_OF_PLACE, {
        variables: {input: {...pageParams, ...filter, placeUuid, layerUuid: selectedLayerUuid}},
    });

    const loadMoreData = useCallback(() => {
        setParams({...pageParams, limit: pageParams.limit + 20});
        fetchMore({variables: {input: {...filter, ...pageParams, placeUuid}}});
    }, [fetchMore, filter, pageParams, placeUuid, setParams]);

    if (error) {
        return <>{error.message}</>;
    }

    return (
        <div id="scrollableDiv" className="h-[calc(100%-64px)] overflow-auto p-3">
            <InfiniteScroll
                dataLength={20}
                next={loadMoreData}
                hasMore={(data?.subjectsOfPlace.total ?? 0) > pageParams.limit}
                loader={<Skeleton avatar paragraph={{rows: 5}} active />}
                endMessage={<Divider plain>А ВОТ И ВСЕ СПИСОК ЗАКОНЧИЛСЯ :)</Divider>}
                scrollableTarget="scrollableDiv"
            >
                <ListView
                    subjectsOfPlace={data?.subjectsOfPlace.items ?? []}
                    previousSubjectsOfPlace={previousData?.subjectsOfPlace.items ?? []}
                    loading={loading}
                />
            </InfiniteScroll>
        </div>
    );
});

export default ScrolledSubjectList;
