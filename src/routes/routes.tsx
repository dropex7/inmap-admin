import type { RouteObject } from "react-router-dom";
import { Outlet } from "react-router";
import { Empty } from "antd";

const additional: Array<RouteObject> = [
  {
    path: "subject",
    element: <Outlet />,
    handle: {
      title: "Объекты",
    },
    children: [
      {
        path: ":id",
        lazy: () => import("../entities/Place/Page"),
        handle: {
          title: "Список объектов",
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
  {
    path: "recommendation",
    element: <Outlet />,
    handle: {
      title: "Рекомендации",
    },
    children: [
      {
        path: ":id",
        element: <Empty />,
        handle: {
          title: "Рекомендации",
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
  {
    path: "news-promo",
    element: <Outlet />,
    handle: {
      title: "Новости и акции",
    },
    children: [
      {
        path: ":id",
        element: <Empty />,
        handle: {
          title: "Новости и акции",
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
];

export default additional;
