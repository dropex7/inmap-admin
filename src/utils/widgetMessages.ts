export function getSelectLayerMessage(layerUuid: string) {
    return {
        type: 'select-layer',
        data: {
            layerUuid,
        },
    };
}

export function getLoadPlanMessage(placeUuid: string, planKey: string) {
    const token = localStorage.getItem('token');

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
