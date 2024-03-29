import clsx from "clsx";
import * as styles from "portfolio-styles/components/text.css";

type Props = {
  fontSize?: keyof (typeof styles)["fontSize"];
  color?: keyof (typeof styles)["fontColor"];
  weight?: keyof (typeof styles)["fontWeight"];
  lineHeight?: keyof (typeof styles)["lineHeight"];
  decoration?: keyof (typeof styles)["textDecoration"];
  verticalAlign?: keyof (typeof styles)["textVerticalAlign"];
} & JSX.IntrinsicElements["span"];

export const Text = ({
  children,
  fontSize,
  color,
  weight,
  lineHeight,
  decoration,
  verticalAlign,
  ...props
}: Props) => {
  return (
    <span
      class={clsx([
        fontSize && styles.fontSize[fontSize],
        color && styles.fontColor[color],
        weight && styles.fontWeight[weight],
        lineHeight && styles.lineHeight[lineHeight],
        decoration && styles.textDecoration[decoration],
        verticalAlign && styles.textVerticalAlign[verticalAlign],
      ])}
      {...props}
    >
      {children}
    </span>
  );
};
