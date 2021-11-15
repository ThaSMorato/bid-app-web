import { DetailedHTMLProps, ReactNode, SelectHTMLAttributes } from "react";
import styles from "./styles.module.scss";

type SelectProps = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & {
  label?: string;
  labelPosition?: "right" | "left";
  children: ReactNode;
};

export const Select = ({ id, label, labelPosition, children, ...rest }: SelectProps) => {
  return (
    <div className={styles.Select__wrapper}>
      {!!label && <label htmlFor={id}>{label}</label>}
      <select
        {...rest}
        id={id}
        className={`${styles.Select} ${!!labelPosition && styles[`Select--${labelPosition}`]}`}>
        {children}
      </select>
    </div>
  );
};
