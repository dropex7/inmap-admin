import type { RouteObject } from "react-router-dom";
import { Outlet } from "react-router";
import { Empty } from "antd";
import { RouteObjectWithHandle } from "./types";
import App from "../App";
import PageError from "./PageError";

export const additional: Array<RouteObjectWithHandle> = [
  {
    path: "place",
    element: <Outlet />,
    handle: {
      title: "Объекты",
    },
    children: [
      {
        path: ":id",
        element: <Outlet />,
        handle: {
          title: "Список объектов",
        },
        children: [
          {
            path: "create-subject",
            lazy: () => import("../entities/Subject/FormSubject"),
            handle: {
              title: "Создание",
            },
          },
          {
            index: true,
            lazy: () => import("../entities/Subject/Page"),
            handle: {
              title: "Список объектов",
            },
          },
        ],
      },
      {
        index: true,
        lazy: () => import("../components/GlobalSelectPlace"),
        handle: {
          title: "Список мест",
        },
      },
    ],
  },
  {
    path: "schema",
    element: <Outlet />,
    handle: {
      title: "Схема",
    },
    children: [
      {
        path: ":id",
        element: <Empty />,
        handle: {
          title: "Схема",
        },
      },
      {
        index: true,
        lazy: () => import("../components/GlobalSelectPlace"),
        handle: {
          title: "Список объектов",
        },
      },
    ],
  },
  // {
  //   path: "recommendation",
  //   element: <Outlet />,
  //   handle: {
  //     title: "Рекомендации",
  //   },
  //   children: [
  //     {
  //       path: ":id",
  //       element: <Empty />,
  //       handle: {
  //         title: "Рекомендации",
  //       },
  //     },
  //     {
  //       index: true,
  //       lazy: () => import("../components/GlobalSelectPlace"),
  //       handle: {
  //         title: "Список объектов",
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: "news-promo",
  //   element: <Outlet />,
  //   handle: {
  //     title: "Новости и акции",
  //   },
  //   children: [
  //     {
  //       path: ":id",
  //       element: <Empty />,
  //       handle: {
  //         title: "Новости и акции",
  //       },
  //     },
  //     {
  //       index: true,
  //       lazy: () => import("../components/GlobalSelectPlace"),
  //       handle: {
  //         title: "Список объектов",
  //       },
  //     },
  //   ],
  // },
];

const baseRoutes: Array<RouteObjectWithHandle> = [...additional];

const rootRoutes: Array<RouteObjectWithHandle> = [
  {
    path: "/",
    element: <App />,
    errorElement: <PageError />,
    children: baseRoutes,
    handle: {
      title: "inMap",
    },
  },
  {
    path: "login",
    errorElement: <PageError />,
    lazy: () => import("../entities/Login/Page"),
    handle: {
      title: "Авторизация",
    },
  },
];

export default rootRoutes;
