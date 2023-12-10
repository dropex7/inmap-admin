/**
 * Created by MIRZOEV A. on 15.08.2023
 */
import 'react-quill/dist/quill.snow.css';

import SearchBar from '../../components/SearchBar';
import {SEARCH_PROMOS} from '../../operations/promo/query';
import LinkToCreate from './LinkToCreate';
import PromoList from './PromoList';

const url = SEARCH_PROMOS.loc?.source.body ?? '';

export function Component() {
    return (
        <div className="flex flex-col gap-3">
            <div className="card flex justify-between p-6">
                <SearchBar placeholder="Поиск объялений" url={url} />
                <LinkToCreate />
            </div>
            <PromoList url={url} />
        </div>
    );
}
