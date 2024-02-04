import clsx from "clsx";
import * as styles from "portfolio-styles/components/button.css";

type Props = {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  rounded?: boolean;
} & JSX.IntrinsicElements["button"];

export const Button = ({
  children,
  size = "md",
  rounded = false,
  ...props
}: Props) => {
  return (
    <button
      {...props}
      class={clsx([
        styles.button,
        styles.buttonSize[size],
        styles.buttonRound[rounded ? "rounded" : "default"],
      ])}
    >
      {children}
    </button>
  );
};
