import styles from "./styles.module.scss";

export const UserAvatar = () => {
  return (
    <div className={styles.Avatar}>
      <span>User Name</span>
      <figure>
        <img src='https://api.multiavatar.com/Conzy.png' alt='Avatar' />
      </figure>
    </div>
  );
};
