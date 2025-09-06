"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { type LucideIcon, Star } from "lucide-react";

import { cn } from "@/lib/utils";

interface RatingItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  selectedValue: number;
  Icon?: LucideIcon;
}

const RatingItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RatingItemProps
>(({ className, value, selectedValue, Icon = Star, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      value={value}
      className={cn(
        "text-primary ring-offset-background focus-visible:ring-ring [&>svg]:stroke-primary fill-transparentv aspect-square focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        props["aria-readonly"] && "pointer-events-none",
        selectedValue >= Number(value) && "[&>svg]:fill-primary",
        className,
      )}
      {...props}
    >
      <Icon
        className="fill-transparent stroke-transparent stroke-[1.5]"
        width={12}
        height={12}
      />
    </RadioGroupPrimitive.Item>
  );
});

RatingItem.displayName = RadioGroupPrimitive.Item.displayName;

interface RatingProps {
  value?: number;
  onValueChange?: (value: number) => void;
  readonly?: boolean;
  Icon?: LucideIcon;
  className?: string;
  children?: React.ReactNode;
}

const Rating = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RatingProps
>(
  (
    {
      value,
      onValueChange,
      readonly = false,
      Icon,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [selectedValue, setSelectedValue] = React.useState(0);
    const isControlled = typeof value === "number";
    const currentValue = isControlled ? value : selectedValue;

    const handleValueChange = (val: string) => {
      if (readonly) return;
      const num = Number(val);
      if (!isControlled) setSelectedValue(num);
      onValueChange?.(num);
    };

    return (
      <RadioGroupPrimitive.Root
        className={cn("flex items-center", className)}
        ref={ref}
        aria-readonly={readonly}
        value={currentValue?.toString() ?? "0"}
        onValueChange={handleValueChange}
        tabIndex={readonly ? -1 : 0}
        {...props}
      >
        {Array.from({ length: 5 }, (_, i) => (
          <RatingItem
            key={i + 1}
            value={(i + 1).toString()}
            Icon={Icon}
            selectedValue={currentValue ?? 0}
            aria-readonly={readonly}
          />
        ))}
        {children}
      </RadioGroupPrimitive.Root>
    );
  },
);

const RatingText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={cn("text-gray-30 ml-2 text-[8px] leading-[12px]", className)}
  >
    {children}
  </span>
);

const RatingCompound = Object.assign(Rating, {
  Item: RatingItem,
  Text: RatingText,
});

export { RatingCompound as Rating };
