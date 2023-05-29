/**
 * Created by MIRZOEV A. on 11.04.2023
 */

import { HTMLProps, memo, useMemo } from "react";
import { SubjectModel } from "../../generated/graphql";
import clsx from "clsx";

interface PreviewLogoProps extends HTMLProps<HTMLImageElement> {
  backgroundColor: SubjectModel["logoBackgroundColor"];
  logoUrl: SubjectModel["logoUrl"];
  alt: HTMLProps<HTMLImageElement>["alt"];
}

const PreviewLogo = memo<PreviewLogoProps>(
  ({ backgroundColor, logoUrl, alt, ...rest }): JSX.Element | null => {
    const colorStyle = useMemo(
      () => ({ background: `#${backgroundColor.slice(2, 8)}` }),
      [backgroundColor]
    );
    return (
      <img
        src={logoUrl}
        alt={alt}
        style={colorStyle}
        className={"h-9 w-80 max-w-full object-contain rounded-t-xl"}
        {...rest}
      />
    );
  }
);

export default PreviewLogo;
