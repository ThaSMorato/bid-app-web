import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../service/api";

type AuthProviderProps = {
  children: ReactNode;
};

type User = {
  id: string;
  name: string;
  login: string;
  avatar_url: string;
  role: string;
  maximum_bid_amount: number;
  bid_alert_at: number;
};

type AuthContextData = {
  user: User | null;
  signIn: (loginBody: LoginBody) => Promise<boolean>;
  signOut: () => void;
  getToken: () => string | null;
};

type AuthResponse = {
  token: string;
  user: User;
};

type LoginBody = {
  login: string;
  password: string;
};

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("@bidapp:token");
  };

  const getToken = () => {
    return localStorage.getItem("@bidapp:token");
  };

  const signIn = async (loginBody: LoginBody) => {
    try {
      const response = await api.post<AuthResponse>("login", loginBody);

      const { token, user } = response.data;

      localStorage.setItem("@bidapp:token", token);

      api.defaults.headers.common.authorization = `Bearer ${token}`;

      setUser(user);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  useEffect(() => {
    const token = getToken();

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      api.get<{ user: User }>("user").then((response) => {
        setUser(response.data.user);
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ getToken, signOut, signIn, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
