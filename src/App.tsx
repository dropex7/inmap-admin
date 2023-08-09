import { Outlet, useNavigate, useNavigation } from "react-router";
import BodyPortal from "./components/BodyPortal";
import Loader from "./components/Loader";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { useAuth } from "./hooks/useAuth";
import { onAuthStateChanged } from "firebase/auth";
import Nav from "./components/Nav";
import { useLocation } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [isLogined, setIsLogined] = useState(false);
  const { auth } = useAuth();
  const { state } = useNavigation();
  const { pathname } = useLocation();

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
      {isLogined && (
        <div className="flex flex-col h-[100vh]">
          <Header />
          <div className="flex">
            <Nav />
            <div className="self-end w-full overflow-scroll h-[calc(100vh-64px)] p-6">
              <Outlet />
            </div>
          </div>
        </div>
      )}
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
