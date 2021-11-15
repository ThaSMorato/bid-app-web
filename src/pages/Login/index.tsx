import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/useAuth";
import styles from "./styles.module.scss";

export const Login = () => {
  const { signIn } = useAuth();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      await signIn({ login, password });
      navigate("/");
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

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

        <Button disabled={isLoading} type='button' onClick={() => handleSignIn()}>
          {isLoading ? "..." : "Enter"}
        </Button>
      </div>
    </main>
  );
};
