import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import styles from "./styles.module.scss";

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  children: ReactNode;
  color?: string;
};

export const Button = ({ children, color = "white-500", ...rest }: ButtonProps) => {
  return (
    <button {...rest} className={`${styles.Button} ${styles[`Button--${color}`]}`}>
      {children}
    </button>
  );
};
