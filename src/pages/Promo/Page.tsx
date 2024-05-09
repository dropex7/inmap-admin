/**
 * Created by MIRZOEV A. on 15.08.2023
 */
import 'react-quill/dist/quill.snow.css';

import SearchBar from '@/components/SearchBar';
import NavigateToCreate from './NavigateToCreate';
import PromoList from './PromoList';
import {GET_PROMOS_KEY} from '@/utils/queryFilterKeys.ts';

export function Component() {
    return (
        <div className="flex flex-col gap-3 px-6 py-3">
            <div className="flex justify-between">
                <SearchBar placeholder="Поиск объялений" url={GET_PROMOS_KEY} />
                <NavigateToCreate />
            </div>
            <PromoList url={GET_PROMOS_KEY} />
        </div>
    );
}
