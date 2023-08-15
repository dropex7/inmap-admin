/**
 * Created by MIRZOEV A. on 07.08.2023
 */

import { memo, useEffect, useState } from "react";
import clsx from "clsx";
import { NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import { ReactComponent as HomeIcon } from "../assets/home.svg";
import { ReactComponent as OtherIcon } from "../assets/other.svg";
import { Button } from "antd";

const links = [
  {
    path: "home",
    title: "Главная",
    icon: <HomeIcon />,
  },
  {
    path: "subject",
    title: "Объекты",
    icon: <OtherIcon />,
  },
  {
    path: "promo",
    title: "Новости и акции",
    icon: <OtherIcon />,
  },
];

const Nav = memo(() => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (pathname === "/") {
      navigate("subject", { replace: true });
    }
  }, []);

  return (
    <aside
      className={clsx(
        "flex flex-col justify-between bg-zinc-900 h-full",
        isOpen ? "w-[15%]" : "w-auto"
      )}
    >
      <nav
        className={clsx("flex flex-col gap-6 py-5", !isOpen && "items-center")}
      >
        {links.map(({ path, title, icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              clsx(
                "flex gap-3 px-4 no-underline leading-none",
                isActive
                  ? "text-lime-400 font-bold fill-lime-400"
                  : "text-neutral-500 fill-neutral-500"
              )
            }
          >
            <div className="flex gap-3 items-center hover:text-lime-300 hover:fill-lime-300">
              {icon}
              {isOpen && <span>{title}</span>}
            </div>
          </NavLink>
        ))}
      </nav>
      <Button
        type="text"
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-5 justify-center border-t border-zinc-800 items-center gap-2.5 inline-flex"
      >
        <img
          src={isOpen ? "/icons/collapse.svg" : "/icons/expand.svg"}
          width={20}
          height={20}
          alt="collapse"
        />
        <div className="text-neutral-500 text-sm font-semibold leading-none">
          {isOpen ? "Свернуть" : null}
        </div>
      </Button>
    </aside>
  );
});

export default Nav;
