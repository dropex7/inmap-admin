import {SUBJECTS_OF_PLACE} from '@/operations/subject/query.ts';
import {GET_PROMOS} from '@/operations/promo/query.ts';

export const SUBJECTS_OF_PLACE_KEY = SUBJECTS_OF_PLACE.loc?.source.body ?? 'SUBJECTS_OF_PLACE_KEY';
export const GET_PROMOS_KEY = GET_PROMOS.loc?.source.body ?? 'GET_PROMOS_KEY';
export const SCROLLED_SUBJECTS_OF_PLACE_KEY = `SCROLLED_${SUBJECTS_OF_PLACE.loc?.source.body}`;
