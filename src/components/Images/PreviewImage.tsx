/**
 * Created by MIRZOEV A. on 11.04.2023
 */

import { HTMLProps, memo } from "react";
import { ImageModel } from "../../generated/graphql";
import clsx from "clsx";

interface PreviewImageProps extends HTMLProps<HTMLImageElement> {
  url: ImageModel["url"];
  rounded?: boolean;
}

const PreviewImage = memo<PreviewImageProps>(
  ({ url, alt, rounded = false, ...rest }) => {
    return (
      <img
        src={url}
        className={clsx("max-w-full object-cover", rounded && "rounded-md")}
        alt={alt}
        {...rest}
      />
    );
  }
);

export default PreviewImage;
