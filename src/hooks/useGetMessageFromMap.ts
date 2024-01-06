import {useEffect, useState} from 'react';
import type {FlutterMessage} from '../components/Map/types';
import {FLUTTER_MESSAGE} from '../components/Map/types';

export function useGetMessageFromMap() {
    const [isReady, setIsReady] = useState(false);
    const [message, setMessage] = useState<FlutterMessage>();

    // This hook is listening an event that came from the Iframe
    useEffect(() => {
        const handler = (ev: MessageEvent<FlutterMessage>) => {
            if (ev.data.type === FLUTTER_MESSAGE.ready) {
                setIsReady(true);
            } else {
                setMessage(ev?.data);
            }
        };

        window.addEventListener('message', handler);

        // Don't forget to remove addEventListener
        return () => {
            setMessage(undefined);
            window.removeEventListener('message', handler);
        };
    }, [message]);

    return {isReady, message};
}
