import React, { ReactNode } from "react";
import clsx from "clsx";

enum Variant {
  PRIMARY = "primary",
  GHOST = "ghost",
}

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: `${Variant}`;
  children?: ReactNode;
  loading?: boolean;
}

const Button = (props: Props) => {
  const { variant, children, loading, ...rest } = props;

  return (
    <button
      className={clsx(
        "rounded-md px-2.5 py-1.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        {
          "bg-primary text-white hover:bg-indigo-500 focus-visible:outline-primary":
            variant === Variant.PRIMARY,
          "bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50":
            variant === Variant.GHOST,
        }
      )}
      {...rest}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

Button.defaultProps = {
  variant: Variant.PRIMARY,
};

export default Button;
