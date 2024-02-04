import clsx from "clsx";
import * as styles from "portfolio-styles/components/link.css";

type Props = {
  color?: keyof typeof styles.fontColor;
  href: string;
  openInNewTab?: boolean;
} & JSX.IntrinsicElements["a"];

export const Link = ({
  children,
  color = styles.defaultFontColor,
  openInNewTab,
  ...props
}: Props) => {
  const anchorProps = {
    href: props.href,
    target: openInNewTab ? "_blank" : undefined,
    rel: openInNewTab ? "noopener noreferrer" : undefined,
  };

  return (
    <a
      class={clsx([styles.link, styles.linkHover, styles.fontColor[color]])}
      {...anchorProps}
    >
      {children}
    </a>
  );
};
