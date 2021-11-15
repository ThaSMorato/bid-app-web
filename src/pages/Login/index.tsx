import { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import styles from "./styles.module.scss";

export const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className={styles.login_main}>
      <div className={styles.login__inputs}>
        <Input value={login} onChange={(e) => setLogin(e.target.value)} placeholder='Login' />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          type='password'
        />

        <Button>Enter</Button>
      </div>
    </main>
  );
};
