import { Outlet, useLocation, useNavigate, useNavigation } from "react-router";
import BodyPortal from "./components/BodyPortal";
import Loader from "./components/Loader";
import Header from "./components/Header";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const { state } = useNavigation();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      navigate("subject");
    }
  }, [pathname]);

  return (
    <>
      <Header />
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
