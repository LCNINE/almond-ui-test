import React from "react";
import clsx from "clsx";

interface FloatingActionsProps {
  children: React.ReactNode;
  position?: "bottom-right" | "bottom-left";
  gap?: "sm" | "md" | "lg";
}

function Root({
  children,
  position = "bottom-right",
  gap = "md",
}: FloatingActionsProps) {
  const positionClass =
    position === "bottom-right"
      ? "bottom-4 right-4 items-end"
      : "bottom-4 left-4 items-start";

  const gapClass = gap === "sm" ? "gap-2" : gap === "lg" ? "gap-6" : "gap-4";

  return (
    <div className={clsx("fixed z-50 flex flex-col", positionClass, gapClass)}>
      {children}
    </div>
  );
}

function Item({ as }: { as: React.ReactElement }) {
  return React.cloneElement(as);
}

const FloatingActions = Object.assign(Root, {
  Item,
});

export default FloatingActions;
