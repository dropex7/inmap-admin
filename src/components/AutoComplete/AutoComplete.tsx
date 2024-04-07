/**
 * Created by MIRZOEV A. on 17.03.2024
 */

import type {ReactNode} from 'react';
import {useCallback, useEffect, useMemo, useState} from 'react';
import type {SelectProps} from 'antd/es/select';
import {Select} from 'antd';
import type {DocumentNode} from 'graphql/language';

import {useQuery} from '@apollo/client';
import {useRecoilValue} from 'recoil';
import {placeAtom} from '@/atoms/selectedPlace.ts';
import useDebounce from '@/hooks/useDebounceValue.ts';
import type {DefaultOption} from '@/components/AutoComplete/types.ts';

type item =
    | {
          uuid: string;
      }
    | string;

export interface AutoCompleteProps<QType, T extends item = item, Multiple extends boolean = false>
    extends Omit<
        SelectProps<Array<string> | string>,
        | 'allowClear'
        | 'filterOption'
        | 'loading'
        | 'mode'
        | 'onChange'
        | 'onSearch'
        | 'options'
        | 'searchValue'
        | 'showArrow'
        | 'showSearch'
        | 'value'
    > {
    mode?: Multiple extends true ? 'multiple' : never;

    request: DocumentNode;
    getItemFromQuery: (queryResult: QType) => Array<T>;

    onChange?(value?: Multiple extends true ? Array<T> : T): void;

    renderItem(item: T): ReactNode;

    value?: (Multiple extends true ? Array<T> : T) | null;
}

function isMultiValue<T extends item = item>(value: Array<T> | T): value is Array<T> {
    return Array.isArray(value);
}

type CustomOption<T extends item = item> = DefaultOption & {
    item: T;
};

function AutoComplete<QType, T extends item = item, Multiple extends boolean = false>({
    onChange,
    request,
    placeholder = 'Поиск',
    renderItem,
    getItemFromQuery,
    value,
    ...rest
}: AutoCompleteProps<QType, T, Multiple>) {
    const placeUuid = useRecoilValue(placeAtom);
    const [query, setQuery] = useState('');
    const debouncedValue = useDebounce(query);

    const {data, loading} = useQuery<QType>(request, {
        variables: {input: {limit: 20, offset: 0, query: debouncedValue, placeUuid}},
    });

    const [local, setLocal] = useState<Array<T> | T | null | undefined>(value);

    useEffect(() => {
        setLocal(value);
    }, [value]);

    const setKeyword = useCallback((value: string) => {
        setQuery(value);
    }, []);

    const onChangeLocal = useCallback(
        (_: unknown, option?: Array<CustomOption<T>> | CustomOption<T>) => {
            const nextValue = option ? (Array.isArray(option) ? option.map(({item}) => item) : option.item) : undefined;

            setLocal(nextValue);
            // @ts-expect-error ошибка с типизацией
            onChange?.(nextValue as Parameters<Required<AutoCompleteProps<T, Multiple>>['onChange']>[0]);
        },
        [onChange],
    );

    const items = useMemo(() => {
        const base = new Map<string, T>([]);

        if (local) {
            if (isMultiValue(local)) {
                local.forEach(localItem =>
                    base.set(typeof localItem === 'string' ? localItem : localItem.uuid, localItem),
                );
            } else {
                base.set(typeof local === 'string' ? local : local.uuid, local);
            }
        }

        if (data) {
            getItemFromQuery(data).forEach(item => {
                base.set(typeof item === 'string' ? item : item.uuid, item);
            });
        }

        return Array.from(base.values());
    }, [data, getItemFromQuery, local]);

    const options = useMemo<Array<CustomOption<T>>>(
        () =>
            items.map(item => ({
                item,
                label: renderItem(item),
                value: typeof item === 'string' ? item : item.uuid,
            })),
        [items, renderItem],
    );

    return (
        <Select
            {...rest}
            allowClear
            filterOption={false}
            loading={loading}
            onChange={onChangeLocal}
            onSearch={setKeyword}
            options={options}
            placeholder={placeholder}
            searchValue={query}
            showSearch
            value={
                local && isMultiValue(local)
                    ? local.map(item => (typeof item === 'string' ? item : item.uuid))
                    : typeof local === 'string'
                      ? local
                      : local?.uuid
            }
        />
    );
}

export default AutoComplete;
