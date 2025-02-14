/**
 * Created by MIRZOEV A. on 07.04.2024
 */

import {memo, useMemo} from 'react';
import {useQuery} from '@apollo/client';
import type {GetSubjectsByPromoQuery} from '@/generated/graphql.ts';
import {GET_SUBJECTS_BY_PROMO} from '@/operations/subject/query.ts';
import SubjectsPromoLogo from '@/pages/promo/views/SubjectsPromoLogo.tsx';
import ExtraElementsNumber from '@/pages/promo/views/ExtraElementsNumber.tsx';
import {useGetPlaceUuid} from '@/hooks/useGetPlaceUuid.ts';

interface PromoSubjectsViewProps {
    promoUuid: string;
}

const MAX_COUNT_OF_LOGOS = 3;

const PromoSubjectsView = memo<PromoSubjectsViewProps>(({promoUuid}) => {
    const placeUuid = useGetPlaceUuid();

    const {data} = useQuery<GetSubjectsByPromoQuery>(GET_SUBJECTS_BY_PROMO, {
        variables: {placeUuid, promoUuid},
    });

    const lengthOfElements = useMemo(
        () => data?.subjectsLinkedToPromo?.length ?? 0,
        [data?.subjectsLinkedToPromo?.length],
    );

    return (
        <div className="flex justify-center align-middle">
            <SubjectsPromoLogo promoSubjects={data?.subjectsLinkedToPromo.slice(0, MAX_COUNT_OF_LOGOS) as any} />

            {lengthOfElements > MAX_COUNT_OF_LOGOS && (
                <ExtraElementsNumber extraCount={lengthOfElements - MAX_COUNT_OF_LOGOS} />
            )}
        </div>
    );
});

export default PromoSubjectsView;
