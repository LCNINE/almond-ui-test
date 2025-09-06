import React from "react";
/* eslint-disable @typescript-eslint/no-require-imports */
type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
};

const LinkWrapper = ({ href, children, className, ...rest }: LinkProps) => {
  try {
    const NextLink = require("next/link").default;
    return (
      <NextLink href={href} className={className} {...rest}>
        {children}
      </NextLink>
    );
  } catch {
    try {
      const { Link: ReactRouterLink } = require("react-router-dom");
      return (
        <ReactRouterLink to={href} className={className} {...rest}>
          {children}
        </ReactRouterLink>
      );
    } catch {
      return (
        <a href={href} className={className} {...rest}>
          {children}
        </a>
      );
    }
  }
};

export default LinkWrapper;
