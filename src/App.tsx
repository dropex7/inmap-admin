import {Outlet, useNavigation} from "react-router";
import BodyPortal from "./components/BodyPortal";
import Loader from "./components/Loader";
import Header from "./components/Header";

function App() {
    const {state} = useNavigation();

  return (
    <>
        <Header/>
        <Outlet />
        {state === 'loading' && (
            <BodyPortal>
                <Loader />
            </BodyPortal>
        )}
    </>
  )
}

export default App
