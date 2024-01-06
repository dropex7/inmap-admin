/**
 * Created by MIRZOEV A. on 03.08.2023
 */

import Map from '../../components/Map/Map';

import MapWrapper from './MapWrapper';

import SelectedObjectInfo from './SelectedObjectInfo';

export function Component() {
    return (
        <section className="flex h-full">
            <MapWrapper>
                <SelectedObjectInfo />
                <Map />
            </MapWrapper>
        </section>
    );
}
