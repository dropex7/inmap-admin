/**
 * Created by MIRZOEV A. on 06.01.2024
 */

import {memo} from 'react';

import {useQuery} from '@apollo/client';
import type {GetSubjectsByIdQuery} from '@/generated/graphql';
import {GET_SUBJECTS_BY_ID} from '@/operations/subject/query';
import {useGetPlaceUuid} from '@/hooks/useGetPlaceUuid.ts';
import {useMap} from '@/hooks/useMap.ts';
import SubjectInfo from '@/pages/Map/panel/card/SubjectInfo.tsx';
import SubjectStatus from '@/pages/Map/panel/card/SubjectStatus.tsx';
import ScrolledSubjectList from '@/pages/Map/panel/card/list/ScrolledSubjectList.tsx';
import SearchBar from '@/components/SearchBar.tsx';
import {SCROLLED_SUBJECTS_OF_PLACE_KEY} from '@/utils/queryFilterKeys.ts';

const SubjectPanel = memo(() => {
    const {selectedObject} = useMap();
    const placeUuid = useGetPlaceUuid();

    const {data} = useQuery<GetSubjectsByIdQuery>(GET_SUBJECTS_BY_ID, {
        variables: {placeUuid, uuid: selectedObject?.originUuid},
        skip: !selectedObject?.originUuid,
    });

    return (
        <div className="flex w-96 min-w-96 flex-col">
            <div className="border-b border-zinc-700 p-4">
                <SearchBar url={SCROLLED_SUBJECTS_OF_PLACE_KEY} />
            </div>

            {selectedObject ? (
                <div className="flex h-full flex-col gap-6">
                    {data ? <SubjectInfo subject={data.subject} /> : <SubjectStatus />}

                    {!selectedObject?.originUuid && <ScrolledSubjectList />}
                </div>
            ) : (
                <ScrolledSubjectList />
            )}
        </div>
    );
});

export default SubjectPanel;
