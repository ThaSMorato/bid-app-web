import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  label?: string;
  labelPosition?: "right" | "left";
};

export const Input = ({ id, label, labelPosition = "left", ...rest }: InputProps) => {
  return (
    <div className={styles.Input__wrapper}>
      {!!label && (
        <label className={styles[`label--${labelPosition}`]} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        {...rest}
        id={id}
        className={`${styles.Input} ${!!label && styles[`Input--${labelPosition}`]}`}
      />
    </div>
  );
};
