/**
 * Created by MIRZOEV A. on 15.08.2023
 */
import 'react-quill/dist/quill.snow.css';

import SearchBar from '@/components/SearchBar';
import {SEARCH_PROMOS} from '@/operations/promo/query';
import NavigateToCreate from './NavigateToCreate';
import PromoList from './PromoList';

const url = SEARCH_PROMOS.loc?.source.body ?? '';

export function Component() {
    return (
        <div className="flex flex-col gap-3 p-6">
            <div className="flex justify-between">
                <SearchBar placeholder="Поиск объялений" url={url} />
                <NavigateToCreate />
            </div>
            <PromoList url={url} />
        </div>
    );
}
