/**
 * Created by MIRZOEV A. on 11.04.2023
 */

import React, { memo } from "react";
import SubjectInfoView from "./SubjectInfoView";
import SubjectCard from "./SubjectCard";
import { GetSubjectsOfPlaceQuery } from "../../generated/graphql";

interface ListProps {
  data: GetSubjectsOfPlaceQuery;
}

const List = memo<ListProps>(({ data }) => {
  return (
    <>
      <div className="flex gap-6 justify-end p-3">
        <SubjectInfoView title="Создано объектов" count={20} max={70} />
        <SubjectInfoView title="Сейчас работают" count={17} max={20} />
        <SubjectInfoView title="Приостановлено" count={3} max={20} />
      </div>
      <div className="flex flex-wrap justify-center gap-4 rounded-lg py-3">
        {data.subjectsOfPlace.map((sub) => (
          <SubjectCard key={sub.uuid} subject={sub} />
        ))}
      </div>
    </>
  );
});

export default List;
