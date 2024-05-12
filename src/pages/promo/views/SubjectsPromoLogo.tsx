/**
 * Created by MIRZOEV A. on 07.04.2024
 */

import {memo} from 'react';
import PreviewLogo from '@/components/Images/PreviewLogo.tsx';
import type {SubjectLocalizedModel} from '@/generated/graphql.ts';

interface SubjectsPromoLogoProps {
    promoSubjects: Array<SubjectLocalizedModel>;
}

const SubjectsPromoLogo = memo<SubjectsPromoLogoProps>(({promoSubjects = []}) => {
    return promoSubjects.map(({logoUrl}) => (
        <PreviewLogo
            key={logoUrl}
            alt="logo"
            logoUrl={logoUrl}
            className="-mr-1 size-10 rounded-full border-8 border-sky-500 object-cover"
        />
    ));
});

export default SubjectsPromoLogo;
