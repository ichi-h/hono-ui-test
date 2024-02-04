import clsx from "clsx";
import * as styles from "portfolio-styles/components/headline.css";

type Props = {
  level: `${keyof typeof styles.headline}`;
} & JSX.IntrinsicElements["h1"];

export const Headline = ({ children, level, ...props }: Props) => {
  const Component = `h${level}` as const;
  return (
    <Component class={clsx([styles.headline[level]])} {...props}>
      {children}
    </Component>
  );
};
