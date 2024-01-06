export interface FlutterMessage {
    type: FlutterMessageTypes;
    data: any;
}

export type FlutterMessageTypes =
    | FLUTTER_MESSAGE.ready
    | FLUTTER_MESSAGE.sendPlan
    | FLUTTER_MESSAGE.objectSelected
    | FLUTTER_MESSAGE.syncStatus;

export enum FLUTTER_MESSAGE {
    ready = 'ready',
    objectSelected = 'object-selected',
    sendPlan = 'send-plan',
    syncStatus = 'sync-status',
}
