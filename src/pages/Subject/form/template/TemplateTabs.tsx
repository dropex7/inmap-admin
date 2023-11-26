/**
 * Created by MIRZOEV A. on 20.11.2023
 */

import React from "react";
import { memo } from "react";
import { LocalizedTemplateTabModel } from "../../../../generated/graphql";
import { Form } from "antd";
import { createIndexWithZeros } from "../helper";
import FieldByType from "./FieldByType";

interface TabsProps {
  data: Array<LocalizedTemplateTabModel>;
}

const TemplateTabs = memo<TabsProps>(({ data }) => {
  return (
    <>
      {data.map(({ uuid, fields, name }, tabIndex) => {
        const tabName = `${createIndexWithZeros(tabIndex)}${uuid}`;
        return (
          <Form.List name={tabName}>
            {() => (
              <div className="card p-6" key={uuid}>
                <h3>{name}</h3>
                {fields.map((field, fieldIndex) => {
                  const name = `${createIndexWithZeros(fieldIndex)}&${field}`;

                  return (
                    <FieldByType
                      tabUuid={tabName}
                      key={name}
                      field={field}
                      name={name}
                    />
                  );
                })}
              </div>
            )}
          </Form.List>
        );
      })}
    </>
  );
});

export default TemplateTabs;
