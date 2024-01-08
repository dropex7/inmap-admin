const token = localStorage.getItem('token');

export function getSelectLayerMessage(layerUuid: string) {
    return {
        type: 'select-layer',
        data: {
            layerUuid,
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
