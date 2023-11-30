/**
 * Created by MIRZOEV A. on 04.11.2023
 */

import {Button} from 'antd';
import {memo, useCallback, useRef} from 'react';

const Map = memo(() => {
    const ref = useRef(null);

    const sendMessageToFlutter = useCallback(() => {
        if (ref?.current) {
            //@ts-expect-error TODO
            ref?.current?.contentWindow?.postMessage(message, '*'); // '*' означает, что сообщение будет отправлено всем окнам.
        }
    }, []);

    return (
        <div className="flex flex-col gap-y-4 rounded-lg border bg-white p-4">
            <iframe
                height="1000"
                ref={ref}
                src="https://inmap-interactive-map-embed.web.app/"
                title="Flutter App"
                width="1000"
            />
            <Button onClick={sendMessageToFlutter}>sendMessageToFlutter</Button>
        </div>
    );
});

export default Map;
