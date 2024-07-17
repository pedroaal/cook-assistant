import { Router } from "@solidjs/router"

import routes from "~/config/routes"
import { CoreProvider } from "~/context/core.context"

import Alerts from "./components/core/Alerts"
import Loader from "./components/core/Loader"

function App() {
  return (
    <CoreProvider>
      <Alerts />
      <Loader />
      <div class="container mx-auto p-4 bg-base-100 text-base-content h-dvh w-dvw">
        <Router>{routes}</Router>
      </div>
    </CoreProvider>
  )
}

export default App
