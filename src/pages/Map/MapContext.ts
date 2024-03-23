import type {RefObject} from 'react';
import {createContext} from 'react';

export interface SelectedObjectFromFlutter {
    objectUuid: string;
    originUuid?: string;
}

interface MaxCtx {
    ref: RefObject<HTMLIFrameElement> | null;
    selectedObject?: SelectedObjectFromFlutter;
    isEditMode: boolean;
    toggleEditMode: () => void;
}

export const MapContext = createContext<MaxCtx>({
    ref: null,
    isEditMode: false,
    toggleEditMode: () => {},
});
