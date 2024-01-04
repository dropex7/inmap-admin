/**
 * Created by MIRZOEV A. on 04.11.2023
 */

import {memo, useEffect, useRef} from 'react';
import {encodedPlan} from '../../pages/Home/testPlan';

const message = {
    data: {
        encodedPlan,
    },
    type: 'open-plan',
};

const Map = memo(() => {
    const ref = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        if (ref?.current?.contentWindow) {
            ref.current.contentWindow.postMessage(message, '*'); // '*' означает, что сообщение будет отправлено всем окнам.
        }
    }, [ref]);

    return (
        <div className="flex flex-col gap-y-4 rounded-lg border bg-white p-4">
            <iframe
                height="500"
                ref={ref}
                src="https://inmap-interactive-map-embed.web.app/"
                title="Flutter App"
                width="1000"
            />
        </div>
    );
});

export default Map;
