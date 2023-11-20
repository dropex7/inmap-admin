/**
 * Created by MIRZOEV A. on 03.08.2023
 */
import { encodedPlan } from "./testPlan";
import { Button } from "antd";
import { useCallback, useRef } from "react";

const message = {
  type: "open-plan",
  data: {
    encodedPlan,
  },
};

export function Component() {
  const ref = useRef(null);

  const sendMessageToFlutter = useCallback(() => {
    if (ref?.current) {
      //@ts-ignore
      ref?.current?.contentWindow?.postMessage(message, "*"); // '*' означает, что сообщение будет отправлено всем окнам.
    }
  }, [ref?.current]);

  return (
    <section className="grid min-h-screen place-content-center">
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
    </section>
  );
}
