import { useQuery } from "@apollo/client";
import { GetSubjectsOfPlaceQuery } from "../../generated/graphql";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import SubjectCard from "./SubjectCard";
import SearchBar from "./SearchBar";
import SubjectInfoView from "./SubjectInfoView";
import { GET_SUBJECTS } from "../../operations/subject/query";

export function Component() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, error } = useQuery<GetSubjectsOfPlaceQuery>(GET_SUBJECTS, {
    variables: { placeUuid: id },
  });

  useEffect(() => {
    if (error) {
      navigate("..");
    }
  }, [error]);

  if (!data) {
    return <>loading...</>;
  }

  return (
    <section className="flex flex-col gap-4 p-6">
      <SearchBar />

      <div className="card flex-col gap-6 p-6">
        <div className="flex gap-6 justify-end">
          <SubjectInfoView title="Создано объектов" count={20} max={70} />
          <SubjectInfoView title="Сейчас работают" count={17} max={20} />
          <SubjectInfoView title="Приостановлено" count={3} max={20} />
        </div>
        <div className="flex flex-wrap justify-center gap-4 rounded-lg py-6">
          {data.subjectsOfPlace.map((sub) => (
            <SubjectCard key={sub.uuid} subject={sub} />
          ))}
        </div>
      </div>
    </section>
  );
}
