import { createBrowserRouter } from "react-router-dom";

import routes from "./routes";
import { IndexRouteObjectWithHandle, RouteObjectWithHandle } from "./types";

function isIndexRoute(
  route: RouteObjectWithHandle
): route is IndexRouteObjectWithHandle {
  return !!route.index;
}

function wrap(all: Array<RouteObjectWithHandle>): Array<RouteObjectWithHandle> {
  return all.map((route) => {
    const isIndex = isIndexRoute(route);
    const wrapped = isIndex ? undefined : wrap(route.children ?? []);

    return {
      ...route,
      element: route.element,
      lazy: route.lazy,
      children: wrapped,
    };
  });
}

export default function getRouter() {
  return createBrowserRouter(wrap(routes));
}
