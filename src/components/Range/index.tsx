import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

type RangeProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  label?: string;
  labelPosition?: "right" | "left";
};

export const Range = ({ id, label, labelPosition, ...rest }: RangeProps) => {
  return (
    <div className={styles.Range__wrapper}>
      {!!label && <label htmlFor={id}>{label}</label>}
      <input
        {...rest}
        id={id}
        className={`${styles.Range} ${!!labelPosition && styles[`Range--${labelPosition}`]}`}
        type='range'
      />
    </div>
  );
};
