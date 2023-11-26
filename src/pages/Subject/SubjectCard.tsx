/**
 * Created by MIRZOEV A. on 11.04.2023
 */

import noPhoto from "../../assets/no-photo-available.png";
import { memo, useMemo } from "react";
import { SubjectLocalizedModel } from "../../generated/graphql";
import PreviewImage from "../../components/Images/PreviewImage";
import PreviewLogo from "../../components/Images/PreviewLogo";
import { useNavigate } from "react-router";

interface SubjectCardProps {
  subject: Partial<SubjectLocalizedModel>;
}

const SubjectCard = memo<SubjectCardProps>(({ subject }) => {
  const {
    uuid,
    name,
    logoUrl,
    images,
    logoBackgroundColor,
    layerName,
    shortDescription,
  } = subject;
  const navigate = useNavigate();

  const backgroundImage = useMemo(() => {
    return images?.[0];
  }, []);

  return (
    <div
      className="card w-80 flex flex-col rounded-xl"
      onClick={() => navigate(uuid)}
    >
      {logoUrl && logoBackgroundColor && (
        <PreviewLogo
          backgroundColor={logoBackgroundColor}
          logoUrl={logoUrl}
          alt="image"
        />
      )}

      <PreviewImage
        height="200px"
        url={backgroundImage ?? noPhoto}
        alt="image"
      />

      <div className="flex flex-col gap-3 p-3">
        <span className="self-end text-gray-500 text-sm">{layerName}</span>
        <strong className="self-start">{name}</strong>
        <span className="self-start text-gray-500 text-sm">
          {shortDescription}
        </span>
      </div>
    </div>
  );
});

export default SubjectCard;
