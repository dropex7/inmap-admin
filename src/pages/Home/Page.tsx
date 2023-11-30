/**
 * Created by MIRZOEV A. on 03.08.2023
 */
import {Button} from 'antd';
import {useCallback, useRef} from 'react';

import {encodedPlan} from './testPlan';

const message = {
    data: {
        encodedPlan,
    },
    type: 'open-plan',
};

export function Component() {
    const ref = useRef(null);

    const sendMessageToFlutter = useCallback(() => {
        if (ref?.current) {
            //@ts-expect-error TODO
            ref?.current?.contentWindow?.postMessage(message, '*'); // '*' означает, что сообщение будет отправлено всем окнам.
        }
    }, []);

    return (
        <section className="grid min-h-screen place-content-center">
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
        </section>
    );
}
