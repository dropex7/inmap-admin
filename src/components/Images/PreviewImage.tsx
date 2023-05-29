/**
 * Created by MIRZOEV A. on 11.04.2023
 */

import { HTMLProps, memo } from "react";
import { ImageModel } from "../../generated/graphql";

interface PreviewImageProps extends HTMLProps<HTMLImageElement> {
  url: ImageModel["url"];
  alt: HTMLProps<HTMLImageElement>["alt"];
}

const PreviewImage = memo<PreviewImageProps>(
  ({ url, alt, ...rest }): JSX.Element | null => {
    return (
      <img
        src={url}
        className="h-40 max-w-full object-cover"
        alt={alt}
        {...rest}
      />
    );
  }
);

export default PreviewImage;
