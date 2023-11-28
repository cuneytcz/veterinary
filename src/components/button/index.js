import React from "react";
import cn from "classnames";
import { cva } from "class-variance-authority";

const ButtonProps = cva(
  "flex justify-center items-center rounded border-2 border-transparent transition duration-300 ease-in-out",
  {
    variants: {
      variant: {
        primary:
          "text-white border-black bg-black hover:text-black hover:border-red-500 hover:bg-red-500",
        outline:
          "text-neutral-600 border-black bg-white hover:text-black hover:border-red-500",
      },
      size: {
        sm: "text-sm font-semibold px-4 h-9",
        md: "text-base font-semibold px-8 h-12",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export default function Button({
  as,
  variant,
  size,
  className,
  children,
  ...props
}) {
  return React.createElement(
    as,
    { ...props, className: cn(ButtonProps({ variant, size, className })) },
    children
  );
}
