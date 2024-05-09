/**
 * Created by MIRZOEV A. on 03.08.2023
 */

import Map from '../../components/Map/Map';

import MapProvider from './MapProvider.tsx';

import SubjectPanel from '@/pages/Map/panel/SubjectPanel';
import SelectLayer from '@/pages/Map/SelectLayer.tsx';
import MapEditorHeader from '@/pages/Map/header/MapEditorHeader.tsx';

export function Component() {
    return (
        <section className="flex h-full flex-col bg-zinc-900">
            <MapProvider>
                <MapEditorHeader />
                <div className="flex h-full overflow-hidden">
                    <SubjectPanel />
                    <SelectLayer />
                    <Map />
                </div>
            </MapProvider>
        </section>
    );
}
