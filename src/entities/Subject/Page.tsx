import { useQuery } from "@apollo/client";
import { GetSubjectsOfPlaceQuery } from "../../generated/graphql";
import { GET_SUBJECTS } from "../../operations";
import { useNavigate, useParams } from "react-router";
import { useCallback, useEffect, useMemo } from "react";
import SubjectCard from "./SubjectCard";
import { Button, Input } from "antd";

const { Search } = Input;

export function Component() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, error } = useQuery<GetSubjectsOfPlaceQuery>(GET_SUBJECTS, {
    variables: { placeUuid: id },
  });

  const handleCreateObject = useCallback(() => {
    navigate("create-subject");
  }, []);

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
      <div className="flex justify-between">
        <Button
          shape="round"
          size="large"
          type="primary"
          onClick={handleCreateObject}
        >
          Создать новый объект
        </Button>
        <Search placeholder="input search text" style={{ width: 200 }} />
      </div>

      <div className="flex flex-wrap justify-center gap-4 rounded-lg">
        {data.subjectsOfPlace.map((sub) => (
          <SubjectCard key={sub.uuid} subject={sub} />
        ))}
      </div>
    </section>
  );
}
