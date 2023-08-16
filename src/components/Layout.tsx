/**
 * Created by MIRZOEV A. on 07.08.2023
 */

import { memo } from "react";
import Header from "./Header";
import Nav from "./Nav";
import { Outlet } from "react-router";

interface LayoutProps {}

const Layout = memo<LayoutProps>(({}) => {
  return (
    <div className="flex flex-col h-[100vh]">
      <Header />
      <div className="flex">
        <Nav />
        <div className="self-end w-full overflow-scroll h-[calc(100vh-64px)] p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
});

export default Layout;
