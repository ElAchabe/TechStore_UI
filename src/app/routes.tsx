import { createBrowserRouter } from "react-router";
import { Layout } from "./layout";
import { HomePage } from "./pages/HomePage";
import { StorePage } from "./pages/StorePage";
import { ProductPage } from "./pages/ProductPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "store", Component: StorePage },
      { path: "product/:id", Component: ProductPage },
    ],
  },
]);
