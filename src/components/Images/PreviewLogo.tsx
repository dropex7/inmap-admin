/**
 * Created by MIRZOEV A. on 11.04.2023
 */

import { HTMLProps, memo, useMemo } from "react";
import type { SubjectLocalizedModel } from "../../generated/graphql";

interface PreviewLogoProps extends HTMLProps<HTMLImageElement> {
  backgroundColor: SubjectLocalizedModel["logoBackgroundColor"];
  logoUrl: SubjectLocalizedModel["logoUrl"];
  alt: HTMLProps<HTMLImageElement>["alt"];
}

const PreviewLogo = memo<PreviewLogoProps>(
  ({ backgroundColor, logoUrl, alt, ...rest }) => {
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
