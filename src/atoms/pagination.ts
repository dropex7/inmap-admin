import type {Key} from 'react';

import {atomFamily, selectorFamily} from 'recoil';

import type {PaginationParams} from '../components/Pagination/types';

// presets

export const defaultPaginationParams = {
    limit: 20,
    offset: 0,
} satisfies PaginationParams;

// atoms & selectors

export const paginationParamsAtom = atomFamily<PaginationParams, string>({
    default: () => defaultPaginationParams,
    key: 'paginationParamsAtom',
});

const paginationFilterAtom = atomFamily<unknown, string>({
    default: () => ({}),
    key: 'paginationFilterAtom',
});

export const paginationSelectionAtom = atomFamily<Array<Key>, string>({
    default: () => [],
    key: 'paginationSelectionAtom',
});

export const paginationFilterSelector = selectorFamily<unknown, string>({
    get:
        url =>
        ({get}) =>
            get(paginationFilterAtom(url)),
    key: 'paginationFilterSelector',
    set:
        url =>
        ({set}, newValue) => {
            set(paginationFilterAtom(url), newValue);
            set(paginationParamsAtom(url), prevValue => ({...prevValue, offset: 0}));
        },
});
