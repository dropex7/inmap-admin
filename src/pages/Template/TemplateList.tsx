/**
 * Created by MIRZOEV A. on 15.11.2023
 */

import { memo } from "react";
import { useNavigate } from "react-router";
import nav from "../../components/Nav";
import { TemplateLocalizedModel } from "../../generated/graphql";

interface TemplateListProps {
  data: Array<TemplateLocalizedModel>;
}

const TemplateList = memo<TemplateListProps>(({ data }) => {
  const navigate = useNavigate();

  const handleSelectTemplate = (id: string) => {
    navigate(id);
  };

  return (
    <section className="card flex p-6 gap-6">
      {data.map(({ uuid, name, imageUrl }) => (
        <div
          key={uuid + name}
          onClick={() => handleSelectTemplate(uuid)}
          className=" p-3 gap-3 flex card flex-col  text-center"
        >
          <img width="150px" src={imageUrl} alt="name" />
          <span>{name}</span>
        </div>
      ))}
    </section>
  );
});

export default TemplateList;
