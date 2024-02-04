import clsx from "clsx";
import * as styles from "portfolio-styles/components/paragraph.css";

type Props = {
  align?: keyof (typeof styles)["textAlign"];
  overflow?: keyof (typeof styles)["overflow"];
  textOverflow?: keyof (typeof styles)["textOverflow"];
  whiteSpace?: keyof (typeof styles)["textWhiteSpace"];
} & JSX.IntrinsicElements["p"];

export const Paragraph = ({
  children,
  align,
  overflow,
  textOverflow,
  whiteSpace,
  ...props
}: Props) => {
  return (
    <p
      class={clsx([
        styles.paragraph,
        align && styles.textAlign[align],
        overflow && styles.overflow[overflow],
        textOverflow && styles.textOverflow[textOverflow],
        whiteSpace && styles.textWhiteSpace[whiteSpace],
      ])}
      {...props}
    >
      {children}
    </p>
  );
};
