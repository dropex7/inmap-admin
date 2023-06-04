/**
 * Created by MIRZOEV A. on 04.06.2023
 */

import { memo, PropsWithChildren, useMemo } from "react";
import { Button, ButtonProps } from "antd";
import { DAY_TYPES, SCHEDULE_DAYS, ScheduleOption } from "./types";

interface ScheduleButtonProps extends Pick<ButtonProps, "onClick"> {
  value: SCHEDULE_DAYS;
  scheduleType: ScheduleOption["type"];
  selected: boolean;
}

const ScheduleButton = memo<PropsWithChildren<ScheduleButtonProps>>(
  ({ value, scheduleType, selected, ...rest }) => {
    const className = useMemo(
      () =>
        selected
          ? "bg-blue-100"
          : scheduleType === DAY_TYPES.WORKING
          ? "bg-green-500 text-white"
          : scheduleType === DAY_TYPES.OFF
          ? "bg-gray-300"
          : "",
      [selected, scheduleType]
    );

    return <Button {...rest} className={className} />;
  }
);

export default ScheduleButton;
