import {useCallback} from 'react';
import {useRecoilState, useResetRecoilState} from 'recoil';

import {paginationFilterSelector} from '../../atoms/pagination';

function usePaginationFilter<T = unknown>(url: string): [T, (filter: Partial<T>) => void, () => void] {
    const [filterS, setFS] = useRecoilState(paginationFilterSelector(url));
    const reset = useResetRecoilState(paginationFilterSelector(url));

    const setFilter = useCallback(
        (nextFilter: Partial<T>) => {
            setFS((prev: T) => ({
                ...prev,
                ...nextFilter,
            }));
        },
        [setFS],
    );

    return [filterS as T, setFilter, reset];
}

export default usePaginationFilter;
