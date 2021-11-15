import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  label?: string;
  labelPosition?: "right" | "left";
};

export const Input = ({ id, label, labelPosition, ...rest }: InputProps) => {
  return (
    <div className={styles.Input__wrapper}>
      {!!label && <label htmlFor={id}>{label}</label>}
      <input
        {...rest}
        id={id}
        className={`${styles.Input} ${!!labelPosition && styles[`Input--${labelPosition}`]}`}
      />
    </div>
  );
};
