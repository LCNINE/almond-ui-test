"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface IconTextContextType {
  className?: string;
  variant?: "default" | "active";
  size?: "sm" | "md" | "lg";
}

const IconTextContext = React.createContext<IconTextContextType>({});

interface IconTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "active";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

function IconText({
  children,
  className,
  variant = "default",
  size = "md",
  onClick,
}: IconTextProps) {
  const contextValue = { className, variant, size };

  return (
    <IconTextContext.Provider value={contextValue}>
      <button
        onClick={onClick}
        className={cn(
          "flex flex-col items-center justify-center gap-1 transition-colors",
          "hover:opacity-80 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none",
          {
            "p-2": size === "sm",
            "p-3": size === "md",
            "p-4": size === "lg",
          },
          className,
        )}
      >
        {children}
      </button>
    </IconTextContext.Provider>
  );
}

interface IconProps {
  children: React.ReactNode;
  className?: string;
}

function Icon({ children, className }: IconProps) {
  const { variant, size } = React.useContext(IconTextContext);

  return (
    <div
      className={cn(
        "flex items-center justify-center transition-colors",
        {
          "h-4 w-4": size === "sm",
          "h-6 w-6": size === "md",
          "h-8 w-8": size === "lg",
          "text-gray-600": variant === "default",
          "text-blue-600": variant === "active",
        },
        className,
      )}
    >
      {children}
    </div>
  );
}

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

function Text({ children, className }: TextProps) {
  const { variant, size } = React.useContext(IconTextContext);

  return (
    <span
      className={cn(
        "font-medium transition-colors",
        {
          "text-xs": size === "sm",
          "text-sm": size === "md",
          "text-base": size === "lg",
          "text-gray-600": variant === "default",
          "text-blue-600": variant === "active",
        },
        className,
      )}
    >
      {children}
    </span>
  );
}

IconText.Icon = Icon;
IconText.Text = Text;

export { IconText };
