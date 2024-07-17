import { lazy } from "solid-js"

const routes = [
  {
    path: "/",
    component: lazy(() => import("~/routes/home")),
  },
]

export default routes
