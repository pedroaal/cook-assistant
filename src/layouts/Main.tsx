import type { JSX, Component } from "solid-js"

import Header from "./Header"
import Footer from "./Footer"
import Whatsapp from "~/components/shared/Whatsapp"

interface IProps {
  children?: JSX.Element
}

const MainLayout: Component<IProps> = (props) => (
  <div class="w-full min-h-screen flex flex-col bg-base-100">
    <Header />
    <div class="grow w-full h-full">
      <div class="flex flex-col grow">{props.children}</div>
    </div>
    <Footer />
    <Whatsapp />
  </div>
)

export default MainLayout
