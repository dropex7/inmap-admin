/**
 * Created by MIRZOEV A. on 30.08.2023
 */

import React, { memo } from "react";
import { Button, message } from "antd";

interface StepActionsProps {
  isMainPart: boolean;
  toPrev: () => void;
}

const StepActions = memo<StepActionsProps>(({ isMainPart, toPrev }) => {
  return (
    <div style={{ marginTop: 24 }}>
      {isMainPart && (
        <Button type="primary" htmlType="submit">
          Перейти к описанию
        </Button>
      )}
      {!isMainPart && (
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => {
            message.success("Processing complete!");
          }}
        >
          Сохранить
        </Button>
      )}
      {!isMainPart && (
        <Button style={{ margin: "0 8px" }} onClick={toPrev}>
          Вернуться
        </Button>
      )}
    </div>
  );
});

export default StepActions;
