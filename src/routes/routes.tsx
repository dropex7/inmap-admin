import type { RouteObject } from "react-router-dom";
import {Outlet} from "react-router";

const additional: Array<RouteObject> = [
  {
    path: "home",
    lazy: () => import("../routes/Test"),
    handle: {
      title: "Главная",
    },
  },
  {
    path: "subject",
    element: <Outlet />,
    handle: {
      title: "Объекты",
    },
    children: [
      {
        path: ":id",
        lazy: () => import("../routes/Test"),
        handle: {
          title: "Объекты",
        },
      },
      {
        index: true,
        lazy: () => import("../routes/Test"),
        handle: {
          title: "Объекты",
        },
      },
    ],
  },
  {
    path: "recommendation",
    lazy: () => import("../routes/Test"),
    handle: {
      title: "Рекомендации",
    },
  },
  {
    path: "news_promo",
    lazy: () => import("../routes/Test"),
    handle: {
      title: "Новости и акции",
    },
  },
  {
    path: "kek",
    lazy: () => import("../routes/Test"),
    handle: {
      title: "Превью акций",
    },
  },
];

export default additional;
