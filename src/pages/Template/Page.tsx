/**
 * Created by MIRZOEV A. on 15.11.2023
 */
import TemplateList from "./TemplateList";
import React from "react";
import { Typography } from "antd";
import { useQuery } from "@apollo/client";
import { TemplateLocalizedModel } from "../../generated/graphql";
import { GET_TEMPLATES } from "../../operations/template/query";

const { Title } = Typography;
export function Component() {
  const { loading, error, data } = useQuery<{
    templates: TemplateLocalizedModel[];
  }>(GET_TEMPLATES);

  return (
    <div className="p-6">
      <div className="flex justify-between pb-3">
        <Title level={3}>Выбор шаблона</Title>
      </div>

      <TemplateList data={data?.templates ?? []} />
    </div>
  );
}
