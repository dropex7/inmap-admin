import type { NonIndexRouteObject } from "react-router";
import type { IndexRouteObject } from "react-router-dom";

export interface Handle {
  title: string;
  navigation?: boolean;
  last?: boolean;
  free?: boolean;
}

export type IndexRouteObjectWithHandle = Omit<
  IndexRouteObject,
  "handle" | "children"
> & {
  handle: Handle;
};

export type NonIndexRouteObjectWithHandle = Omit<
  NonIndexRouteObject,
  "handle" | "children"
> & {
  handle: Handle;
  children?: Array<IndexRouteObjectWithHandle | NonIndexRouteObjectWithHandle>;
};

export type RouteObjectWithHandle =
  | IndexRouteObjectWithHandle
  | NonIndexRouteObjectWithHandle;
