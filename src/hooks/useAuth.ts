import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase.config";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router";

const app = initializeApp(firebaseConfig);

export function useAuth() {
  const auth = useMemo(() => getAuth(app), []);
  const navigate = useNavigate();

  const login = useCallback(
    async (email: string, password: string) => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/");
      } catch (err) {
        // some logic
      }
    },
    [auth]
  );

  // const sendPasswordReset = async (email: string) => {
  //   try {
  //     await sendPasswordResetEmail(auth, email);
  //     alert("Password reset link sent!");
  //   } catch (err) {
  //     // some logic
  //   }
  // };

  const logout = useCallback(() => {
    signOut(auth);
  }, [auth]);

  return { auth, login, logout };
}
