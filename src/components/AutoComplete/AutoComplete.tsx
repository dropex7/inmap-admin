/**
 * Created by MIRZOEV A. on 17.03.2024
 */

import {useCallback, useMemo, useState} from 'react';
import type {SelectProps} from 'antd/es/select';
import {Select} from 'antd';
import type {DocumentNode} from 'graphql/language';

import {useQuery} from '@apollo/client';
import {useRecoilValue} from 'recoil';
import {placeAtom} from '@/atoms/selectedPlace.ts';
import type {DefaultOption} from '@/components/AutoComplete/types.ts';
import useDebounce from '@/hooks/useDebounceValue.ts';

interface AutoCompleteProps<QType> extends SelectProps {
    request: DocumentNode;
    renderOptions: (queryResult: QType) => Array<DefaultOption>;
}

function AutoComplete<QType>({
    request,
    renderOptions,
    mode,
    placeholder = 'Выбрать',
    ...props
}: AutoCompleteProps<QType>) {
    const placeUuid = useRecoilValue(placeAtom);
    const [query, setQuery] = useState('');

    const debouncedValue = useDebounce(query);

    const {data, loading} = useQuery<QType>(request, {
        variables: {input: {limit: 20, offset: 0, query: debouncedValue, placeUuid}},
    });

    const handleSearch = useCallback((value: string) => {
        setQuery(value);
    }, []);

    const options = useMemo<Array<DefaultOption>>(() => {
        return data ? renderOptions(data) : [];
    }, [data, renderOptions]);

    return (
        <Select
            {...props}
            mode={mode}
            showSearch
            loading={loading}
            placeholder={placeholder}
            defaultActiveFirstOption={false}
            suffixIcon={null}
            filterOption={false}
            onSearch={handleSearch}
            notFoundContent={null}
            options={options}
        />
    );
}

export default AutoComplete;
