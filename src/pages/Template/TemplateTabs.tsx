/**
 * Created by MIRZOEV A. on 20.11.2023
 */

import { memo } from "react";
import { LocalizedTemplateTabModel } from "../../generated/graphql";
import TemplateFields from "../Subject/TemplateFields";

interface TabsProps {
  data: Array<LocalizedTemplateTabModel>;
}

const TemplateTabs = memo<TabsProps>(({ data }) => {
  return (
    <>
      {data.map(({ uuid, fields }, index) => (
        <>
          <TemplateFields
            key={uuid}
            tabUuid={uuid}
            fields={fields}
            index={index}
          />
          <hr />
        </>
      ))}
    </>
  );
});

export default TemplateTabs;
