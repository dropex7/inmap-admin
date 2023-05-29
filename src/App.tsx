import { Outlet, useLocation, useNavigate, useNavigation } from "react-router";
import BodyPortal from "./components/BodyPortal";
import Loader from "./components/Loader";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { useAuth } from "./hooks/useAuth";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const navigate = useNavigate();
  const [isLogined, setIsLogined] = useState(false);
  const { auth } = useAuth();
  const { state } = useNavigation();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("subject");

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
      {isLogined && <Header />}

      <Outlet />

      {state === "loading" && (
        <BodyPortal>
          <Loader />
        </BodyPortal>
      )}
    </>
  );
}

export default App;
