/**
 * Created by MIRZOEV A. on 15.08.2023
 */
import 'react-quill/dist/quill.snow.css';

import PromoList from './PromoList';
import SearchBar from './SearchBar';

export function Component() {
    return (
        <div className="flex flex-col gap-3">
            <SearchBar />
            <PromoList />
        </div>
    );
}
