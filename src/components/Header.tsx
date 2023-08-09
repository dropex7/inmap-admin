/**
 * Created by MIRZOEV A.on 09.04.2023
 */

import { memo } from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav";
import { Button } from "antd";
import { useAuth } from "../hooks/useAuth";

const Header = memo((): JSX.Element | null => {
  const { logout } = useAuth();

  return (
    <header className="flex h-header items-center gap-x-6 bg-zinc-900 border-b border-opacity-20 border-gray-300 p-6">
      <Link to="/">
        <img src="/inmap.svg" width={83} height={30} alt="Pulse Core" />
      </Link>

      <span className="flex-auto" />

      <Button onClick={() => logout()}>Log out</Button>
    </header>
  );
});

export default Header;
