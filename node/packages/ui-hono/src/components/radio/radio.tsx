import clsx from "clsx";
import * as styles from "portfolio-styles/components/radio.css";

type Props = JSX.IntrinsicElements["input"];

const _Radio = ({ children, ...props }: Props) => {
  return (
    <label class={styles.radioLabel}>
      <input {...props} type="radio" class={clsx([styles.radio])} />
      <div class={styles.radioMarker} />
      {children}
    </label>
  );
};

_Radio.displayName = "Radio";

export const Radio = _Radio;
