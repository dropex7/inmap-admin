import { memo } from "react";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";

const RouterProviderWrapper = memo(() => {
  return <RouterProvider router={router} />;
});

export default RouterProviderWrapper;
