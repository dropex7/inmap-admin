import {useCallback} from 'react';
import {useRecoilState} from 'recoil';

import type {PaginationParams} from '@/components/Pagination/types';

import {paginationParamsAtom} from '@/atoms/pagination';

function usePaginationParams(url: string): [PaginationParams, (nextParam: Partial<PaginationParams>) => void] {
    const [params, setP] = useRecoilState(paginationParamsAtom(url));

    const setParams = useCallback(
        (nextParam: Partial<PaginationParams>) => {
            setP(prev => ({
                ...prev,
                ...nextParam,
            }));
        },
        [setP],
    );

    return [params, setParams];
}

export default usePaginationParams;
