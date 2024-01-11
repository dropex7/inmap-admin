/**
 * Created by MIRZOEV A. on 09.08.2023
 */

import {SearchOutlined} from '@ant-design/icons';
import {Input} from 'antd';
import {memo, useEffect, useState} from 'react';

import type {PaginationParams} from './Pagination/types';

import usePaginationFilter from '@/hooks/pagination/usePaginationFilter';
import {useDebounce} from '@/hooks/useDebounce';

interface SearchBarProps {
    placeholder?: string;
    url: string;
}

interface Filter extends PaginationParams {
    query?: string;
}

const SearchBar = memo<SearchBarProps>(({placeholder = 'Поиск', url}) => {
    const [filter, setFilter] = usePaginationFilter<Partial<Filter>>(url);
    const [value, setValue] = useState(filter.query);
    const debouncedValue = useDebounce<string>(value ?? '', 500);

    useEffect(() => {
        setFilter({...filter, query: debouncedValue});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue]);

    return (
        <div className="flex items-center gap-3">
            <Input
                addonBefore={<SearchOutlined />}
                onChange={({target}) => setValue(target.value)}
                placeholder={placeholder}
                size="large"
                value={value}
            />
        </div>
    );
});

export default SearchBar;
