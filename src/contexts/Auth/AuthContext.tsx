import {createContext} from "react"
import { User } from "../../types/User";

export type AuthContextType = {
  user: User | null; // se estiver logado (user), caso contrario nulo
  signin: (email: string, password: string) => Promise<boolean>;
  singout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);