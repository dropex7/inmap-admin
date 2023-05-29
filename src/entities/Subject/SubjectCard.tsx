/**
 * Created by MIRZOEV A. on 11.04.2023
 */

import { memo, useMemo } from "react";
import { SubjectModel } from "../../generated/graphql";
import PreviewImage from "../../components/Images/PreviewImage";
import PreviewLogo from "../../components/Images/PreviewLogo";

interface SubjectCardProps {
  subject: Partial<SubjectModel>;
}

const SubjectCard = memo<SubjectCardProps>(
  ({ subject }): JSX.Element | null => {
    const { name, logoUrl, images, logoBackgroundColor } = subject;

    const backgroundImage = useMemo(() => {
      return images?.[0];
    }, []);

    return (
      <div className="card w-80 flex flex-col rounded-xl">
        {logoUrl && logoBackgroundColor && (
          <PreviewLogo
            backgroundColor={logoBackgroundColor}
            logoUrl={logoUrl}
            alt="image"
          />
        )}

        {backgroundImage && (
          <PreviewImage url={backgroundImage.url} alt="image" />
        )}
        <div className="flex flex-col gap-3 p-3">
          <span className="self-end text-gray-500 text-sm">N этаж</span>
          <span className="self-center">{name}</span>
        </div>
      </div>
    );
  }
);

export default SubjectCard;
