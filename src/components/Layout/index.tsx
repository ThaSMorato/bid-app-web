import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { UserAvatar } from "../UserAvatar";
import styles from "./styles.module.scss";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.Layout}>
      <header className={styles.Layout__header}>
        <Link to='/'>
          <h1>Logo</h1>
        </Link>
        <UserAvatar />
      </header>
      <main>{children}</main>
    </div>
  );
};
