import clsx from "clsx";
import * as styles from "portfolio-styles/components/link.css";
import { ComponentProps, ElementType } from "react";

type Props<T extends ElementType> = {
  className?: string;
  children?: React.ReactNode;
  color?: keyof typeof styles.fontColor;
} & (
  | ({
      href: string;
      as?: never;
      asProps?: never;
      openInNewTab?: boolean;
    } & ComponentProps<"a">)
  | {
      href?: never;
      as: T;
      asProps: ComponentProps<T>;
      openInNewTab?: never;
    }
);

export const Link = <T extends ElementType>({
  className,
  children,
  color = styles.defaultFontColor,
  openInNewTab,
  ...props
}: Props<T>) => {
  const isAnchor = "href" in props;
  const Component = isAnchor || !props.as ? "a" : props.as;
  const anchorProps = isAnchor
    ? {
        href: props.href,
        target: openInNewTab ? "_blank" : undefined,
        rel: openInNewTab ? "noopener noreferrer" : undefined,
      }
    : {};

  return (
    <Component
      className={clsx([
        styles.link,
        styles.linkHover,
        styles.fontColor[color],
        className,
      ])}
      {...anchorProps}
      {...props.asProps}
    >
      {children}
    </Component>
  );
};
