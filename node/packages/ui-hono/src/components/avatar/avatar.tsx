import clsx from "clsx";
import * as styles from "portfolio-styles/components/avatar.css";

type Props = {
  src: string;
  size: keyof typeof styles.avatar;
} & JSX.IntrinsicElements["img"];

export const Avatar = ({ src, size, ...props }: Props) => {
  return <img class={clsx([styles.avatar[size]])} src={src} {...props} />;
};
