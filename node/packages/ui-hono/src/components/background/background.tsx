import clsx from "clsx";
import * as styles from "portfolio-styles/components/background.css";

type Props = {
  classForBg?: string;
  styleForBg?: JSX.IntrinsicElements["div"]["style"];
  color?: keyof (typeof styles)["bg"];
  opacity?: keyof (typeof styles)["opacity"];
  src?: string;
  position?: keyof (typeof styles)["bgPosition"];
  size?: keyof (typeof styles)["bgSize"];
} & JSX.IntrinsicElements["div"];

export const Background = ({
  classForBg,
  styleForBg,
  children,
  color,
  opacity,
  src,
  position = "center",
  size = "cover",
  ...props
}: Props) => {
  return (
    <div class={clsx([styles.backgroundParent])} {...props}>
      <div
        class={clsx([
          styles.background,
          color && styles.bg[color],
          opacity && styles.opacity[opacity],
          position && styles.bgPosition[position],
          size && styles.bgSize[size],
          classForBg,
        ])}
        style={{
          ...styleForBg,
          backgroundImage: src && `url(${src})`,
        }}
      />
      {children}
    </div>
  );
};
