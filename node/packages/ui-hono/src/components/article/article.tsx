import clsx from "clsx";
import * as styles from "portfolio-styles/components/article.css";

type Props = {
  dangerouslySetInnerHTML: {
    __html: string;
  };
} & JSX.IntrinsicElements["div"];

export const Article = ({ dangerouslySetInnerHTML, ...props }: Props) => {
  return (
    <div
      class={clsx([styles.article])}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      {...props}
    />
  );
};
