import { Router } from "@solidjs/router"

import routes from "~/config/routes"
import { CoreProvider } from "~/context/core.context"

import "./style/index.scss"

function App() {
  return (
    <CoreProvider>
      <Router>{routes}</Router>
    </CoreProvider>
  )
}

export default App
