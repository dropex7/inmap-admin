import type { IndexRouteObject, RouteObject } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import PageError from "./PageError";
import additional from "./routes";

const baseRoutes: Array<RouteObject> = [...additional];

const rootRoutes: Array<RouteObject> = [
  {
    path: "/",
    element: <App />,
    errorElement: <PageError />,
    children: baseRoutes,
    handle: {
      title: "inMap",
    },
  },
];

function isIndexRoute(route: RouteObject): route is IndexRouteObject {
  return !!route.index;
}

function wrap(all: Array<RouteObject>): Array<RouteObject> {
  return all.map((route) => {
    return isIndexRoute(route)
      ? {
          ...route,
          element: route.element,
          lazy: route.lazy,
          loader: route.loader,
          errorElement: route.errorElement ?? <PageError />,
        }
      : {
          ...route,
          element: route.element,
          lazy: route.lazy,
          loader: route.loader,
          children: wrap(route.children ?? []),
          errorElement: route.errorElement ?? <PageError />,
        };
  });
}

export default function getRouter() {
  return createBrowserRouter(wrap(rootRoutes));
}
