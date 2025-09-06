import React, { type ImgHTMLAttributes } from "react";
/* eslint-disable @typescript-eslint/no-require-imports */

export interface ImageWrapperProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  priority?: boolean;
  placeholder?: "blur";
  blurDataURL?: string;
  loading?: "lazy" | "eager";
  unoptimized?: boolean;
  style?: React.CSSProperties;
  onLoad?: (event: any) => void;
  onError?: (event: any) => void;
}

const ImageWrapper = ({
  src,
  ...props
}: ImageWrapperProps): React.ReactElement => {
  try {
    const NextImage = require("next/image").default as React.ComponentType<any>;
    return <NextImage src={src} {...props} />;
  } catch {
    console.warn("Not using Next.js, falling back to <img>.");
    return <img src={src} {...props} />;
  }
};

export default ImageWrapper;
