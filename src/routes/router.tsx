import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PageError from "./PageError";
import { Outlet } from "react-router";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageError />,
    children: [
      {
        path: "subject",
        element: <Outlet />,
        errorElement: <PageError />,
        children: [
          {
            path: ":id",
            lazy: () => import("../components/PageWrapper"),
            errorElement: <PageError />,
            children: [
              {
                path: "create-subject",
                element: <Outlet />,
                errorElement: <PageError />,
                children: [
                  {
                    index: true,
                    lazy: () => import("../pages/Template/Page"),
                    errorElement: <PageError />,
                  },
                  {
                    path: ":templateId",
                    lazy: () => import("../pages/Subject/form/Page"),
                    errorElement: <PageError />,
                  },
                ],
              },
              {
                path: ":subjectId",
                lazy: () => import("../pages/Subject/Page"),
                errorElement: <PageError />,
              },
              {
                index: true,
                lazy: () => import("../pages/Subject/PageList"),
                errorElement: <PageError />,
              },
            ],
          },
          {
            index: true,
            lazy: () => import("../pages/Place/GlobalSelectPlace"),
          },
        ],
      },
      {
        path: "promo",
        element: <Outlet />,
        errorElement: <PageError />,
        children: [
          {
            path: ":id",
            lazy: () => import("../components/PageWrapper"),
            errorElement: <PageError />,
            children: [
              {
                path: "create-promo",
                lazy: () => import("../pages/Promo/PromoForm"),
                errorElement: <PageError />,
              },
              {
                index: true,
                lazy: () => import("../pages/Promo/Page"),
                errorElement: <PageError />,
              },
            ],
          },
          {
            index: true,
            lazy: () => import("../pages/Place/GlobalSelectPlace"),
          },
        ],
      },
      {
        path: "home",
        element: <Outlet />,
        errorElement: <PageError />,
        children: [
          {
            path: ":id",
            lazy: () => import("../components/PageWrapper"),
            errorElement: <PageError />,
            children: [
              {
                index: true,
                lazy: () => import("../pages/Home/Page"),
                errorElement: <PageError />,
              },
            ],
          },
          {
            index: true,
            lazy: () => import("../pages/Place/GlobalSelectPlace"),
          },
        ],
      },
      {
        path: "*",
        element: <div className="text-white">Нет такой странички бро</div>,
      },
    ],
  },
  {
    path: "login",
    errorElement: <PageError />,
    lazy: () => import("../pages/Login/Page"),
  },
]);

export { router };
