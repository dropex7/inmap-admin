/**
 * Created by MIRZOEV A. on 07.08.2023
 */

import { memo, useEffect, useState } from "react";
import clsx from "clsx";
import { NavLink, useLocation } from "react-router-dom";
import { useNavigate, useParams } from "react-router";
import { Button } from "antd";
import { useRecoilValue } from "recoil";
import { placeAtom } from "../atoms/selectedPlace";

const links = [
  { path: "home", title: "Главная", iconSrc: "/icons/home.svg" },
  // { path: "/map", title: "Карта", iconSrc: "/icons/other.svg" },
  { path: "subjects", title: "Объекты", iconSrc: "/icons/other.svg" },
  // {
  //   path: "/recommendation",
  //   title: "Рекомендации",
  //   iconSrc: "/icons/other.svg",
  // },
  // { path: "/news", title: "Новости и акции", iconSrc: "/icons/other.svg" },
  // {
  //   path: "/loyalty",
  //   title: "Программа лояльности",
  //   iconSrc: "/icons/other.svg",
  // },
  // { path: "/analytics", title: "Аналитика", iconSrc: "/icons/other.svg" },
];

const Nav = memo(() => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (pathname === "/") {
      navigate("subjects", { replace: true });
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
        {links.map(({ path, title, iconSrc }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              clsx(
                "flex gap-3 px-4 no-underline leading-none",
                isActive ? "text-white font-bold" : "text-neutral-500"
              )
            }
          >
            <div className="flex gap-3 items-center hover:text-blue-300">
              <img src={iconSrc} width={20} height={20} alt={title} />
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
