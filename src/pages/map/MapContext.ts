import type {RefObject} from 'react';
import {createContext} from 'react';

export interface SelectedObjectFromFlutter {
    objectUuid: string;
    originUuid?: string;
}

type LinkedLayer = {
    layerUuid: string;
    originUuid: string;
    linkedObjects: Array<SelectedObjectFromFlutter>;
};
export interface PlanState {
    canRedo: boolean;
    canUndo: boolean;
    isEdited: boolean;
    linkedLayers: Array<LinkedLayer>;
}

interface MaxCtx {
    ref: RefObject<HTMLIFrameElement> | null;
    planState?: PlanState;
    selectedObject?: SelectedObjectFromFlutter;
    resetSelectedObject: () => void;
    isEditMode: boolean;
    toggleEditMode: () => void;
    selectedPlanKey: string;
    setSelectedPlanKey: (plan: string) => void;
    selectedLayerUuid?: string | null;
    setSelectedLayerUuid: (uuid: string) => void;
}

export const MapContext = createContext<MaxCtx>({
    selectedPlanKey: '',
    ref: null,
    isEditMode: false,

    resetSelectedObject: () => {},
    toggleEditMode: () => {},
    setSelectedPlanKey: () => {},
    setSelectedLayerUuid: () => {},
});
