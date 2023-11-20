import { useQuery } from "@apollo/client";
import { GetSubjectsOfPlaceQuery } from "../../generated/graphql";
import { useNavigate, useParams } from "react-router";
import React, { useEffect } from "react";
import SubjectCard from "./SubjectCard";
import SearchBar from "./SearchBar";
import SubjectInfoView from "./SubjectInfoView";
import { GET_SUBJECTS } from "../../operations/subject/query";
import { Spin } from "antd";
import List from "./List";

export function Component() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, loading, error } = useQuery<GetSubjectsOfPlaceQuery>(
    GET_SUBJECTS,
    {
      variables: { placeUuid: id },
    }
  );

  useEffect(() => {
    if (error) {
      navigate("..");
    }
  }, [error]);

  return (
    <section className="flex flex-col gap-4">
      <SearchBar />

      <Spin spinning={loading} tip="Loading" size="large">
        <div className="card flex-col gap-6">
          {data && <List data={data} />}
        </div>
      </Spin>
    </section>
  );
}
