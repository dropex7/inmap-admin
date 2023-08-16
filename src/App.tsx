import { Outlet, useNavigate, useNavigation } from "react-router";
import BodyPortal from "./components/BodyPortal";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import { useAuth } from "./hooks/useAuth";
import { onAuthStateChanged } from "firebase/auth";
import Layout from "./components/Layout";

function App() {
  const navigate = useNavigate();
  const [isLogined, setIsLogined] = useState(false);
  const { auth } = useAuth();
  const { state } = useNavigation();

  useEffect(() => {
    const getToken = async () => {
      localStorage.setItem(
        "token",
        (await auth.currentUser?.getIdToken()) ?? ""
      );
    };

    onAuthStateChanged(auth, (user) => {
      if (user) {
        getToken();
        setIsLogined(true);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // ...
      } else {
        setIsLogined(false);
        localStorage.clear();
        // User is signed out
        navigate("/login");
      }
    });
  }, [auth]);

  return (
    <>
      {isLogined && <Layout />}
      {!isLogined && <Outlet />}

      {state === "loading" && (
        <BodyPortal>
          <Loader />
        </BodyPortal>
      )}
    </>
  );
}

export default App;
