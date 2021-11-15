import React from "react";

import styles from "./styles.module.scss";

export const PageLoading = () => {
  return (
    <div className={styles.PageLoading__container}>
      <div className={styles.pageLoading}>
        <div></div>
      </div>
    </div>
  );
};
