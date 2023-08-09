/**
 * Created by MIRZOEV A. on 10.08.2023
 */

import { memo } from "react";

interface SubjectInfoViewProps {
  title: string;
  count: number;
  max: number;
}

const SubjectInfoView = memo<SubjectInfoViewProps>(({ title, max, count }) => {
  return (
    <div className="card flex flex-col p-5 gap-1">
      <div>{title}</div>
      <div className="flex justify-center items-center gap-1">
        <strong className="text-2xl text-blue-100">{count}</strong>
        <span>из {max}</span>
      </div>
    </div>
  );
});

export default SubjectInfoView;
