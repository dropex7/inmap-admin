import { useQuery } from "@apollo/client";
import { GetSubjectsOfPlaceQuery } from "../../generated/graphql";
import { GET_SUBJECTS } from "../../operations";
import { useNavigate, useParams } from "react-router";
import { useEffect, useMemo } from "react";
import SubjectCard from "./SubjectCard";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

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
    <section className="flex flex-col p-6">
      <NavLink
        to={"create"}
        className={({ isActive }) =>
          clsx("px-4 no-underline", isActive ? "text-blue-500" : "text-black")
        }
      >
        Создать
      </NavLink>

      <div className="flex flex-wrap justify-center gap-4 rounded-lg">
        {data.subjectsOfPlace.map((sub) => (
          <SubjectCard key={sub.uuid} subject={sub} />
        ))}
      </div>
    </section>
  );
}
