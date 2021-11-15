import { useAuth } from "../../hooks/useAuth";
import styles from "./styles.module.scss";

export const UserAvatar = () => {
  const { user } = useAuth();
  return (
    <div className={styles.Avatar}>
      <span>{user?.name}</span>
      <figure>
        <img src={user?.avatar_url} alt='Avatar' />
      </figure>
    </div>
  );
};
