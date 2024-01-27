/**
 * Created by MIRZOEV A. on 03.08.2023
 */

import Map from '../../components/Map/Map';

import MapWrapper from './MapWrapper';

import SubjectPanel from './Panel/SubjectPanel';
import SelectLayer from './Panel/SelectLayer';

export function Component() {
    return (
        <section className="card flex h-full rounded-xl bg-zinc-900">
            <MapWrapper>
                <SubjectPanel />
                <SelectLayer />
                <Map />
            </MapWrapper>
        </section>
    );
}
