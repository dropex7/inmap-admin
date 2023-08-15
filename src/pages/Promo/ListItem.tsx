/**
 * Created by MIRZOEV A. on 15.08.2023
 */

import { memo } from "react";
import { PromoLocalizedModel } from "../../generated/graphql";
import noPhoto from "../../assets/no-photo-available.png";
import PreviewImage from "../../components/Images/PreviewImage";

interface ListItemProps {
  promo: Partial<PromoLocalizedModel>;
}

const ListItem = memo<ListItemProps>(({ promo }) => {
  const { title, subtitle, imageUrl } = promo;
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr] items-center">
      <div className="flex items-center gap-9 border-r border-neutral-300">
        <PreviewImage
          width="100px"
          height="100px"
          rounded
          url={imageUrl ?? noPhoto}
          alt="image"
        />
        <div className="flex flex-col gap-3">
          <span className="text-base font-bold leading-none">{title}</span>
          <span className="text-sm leading-none">{subtitle}</span>
        </div>
      </div>

      <div className="flex justify-center">
        <PreviewImage
          width="100px"
          height="100px"
          rounded
          url={imageUrl ?? noPhoto}
          alt="image"
        />
      </div>

      <div className="flex justify-center">
        <PreviewImage
          width="100px"
          height="100px"
          rounded
          url={imageUrl ?? noPhoto}
          alt="image"
        />
      </div>
    </div>
  );
});

export default ListItem;
