/**
 * Created by MIRZOEV A. on 04.11.2023
 */

import { memo, useCallback, useRef } from "react";
import { Button } from "antd";

interface MapProps {}

const Map = memo<MapProps>(({}) => {
  const ref = useRef(null);

  const sendMessageToFlutter = useCallback(() => {
    if (ref?.current) {
      //@ts-ignore
      ref?.current?.contentWindow?.postMessage(message, "*"); // '*' означает, что сообщение будет отправлено всем окнам.
    }
  }, [ref?.current]);

  return (
    <div className="flex flex-col gap-y-4 rounded-lg border bg-white p-4">
      <iframe
        ref={ref}
        title="Flutter App"
        src="https://inmap-interactive-map-embed.web.app/"
        width="1000"
        height="1000"
      />
      <Button onClick={sendMessageToFlutter}>sendMessageToFlutter</Button>
    </div>
  );
});

export default Map;
