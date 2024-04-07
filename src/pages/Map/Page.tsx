/**
 * Created by MIRZOEV A. on 03.08.2023
 */

import Map from '../../components/Map/Map';

import MapWrapper from './MapWrapper';

import SubjectPanel from './Panel/SubjectPanel';
import SelectLayer from './Panel/SelectLayer';
import MapEditorHeader from '@/pages/Map/header/MapEditorHeader.tsx';

export function Component() {
    return (
        <section className="flex h-full flex-col bg-zinc-900">
            <MapWrapper>
                <MapEditorHeader />
                <div className="flex h-full">
                    <SubjectPanel />
                    <SelectLayer />
                    <Map />
                </div>
            </MapWrapper>
        </section>
    );
}
