const token = localStorage.getItem('token');

export function getSelectLayerMessage(layerUuid: string) {
    return {
        type: 'select-layer',
        data: {
            originUuid: layerUuid,
        },
    };
}

export function getLoadPlanMessage(placeUuid: string, planKey?: string | null) {
    return {
        type: 'load-plan',
        data: {
            placeUuid, //uuid места
            planKey, //ключ плана
            env: 'dev', //среда (может быть только dev/prod)
            userToken: token, // токен пользователя (без Bearer)
        },
    };
}

export function getSyncPlanMessage(placeUuid: string, planKey?: string | null) {
    return {
        type: 'sync-plan',
        data: {
            placeUuid, //uuid места
            planKey, //ключ плана
            env: 'dev', //среда (может быть только dev/prod)
            userToken: token, // токен пользователя (без Bearer)
        },
    };
}

export function connectObjectWithPlace(objectUuid?: string, originUuid?: string) {
    return {
        type: 'link-object',
        data: {
            objectUuid,
            originUuid, //объект из бд
        },
    };
}

export function selectObjectByOriginUuid(originUuid?: string) {
    return {
        type: 'select-object',
        data: {
            originUuid, //объект из бд
        },
    };
}

export function undoChanges() {
    return {
        type: 'undo',
        data: {},
    };
}

export function redoChanges() {
    return {
        type: 'redo',
        data: {},
    };
}
