import type { Component } from "solid-js"
import { HiOutlinePhone } from "solid-icons/hi"

import Button from "~/components/shared/Button"

const Whatsapp: Component = () => {
  const handleClick = () => {
    window.open("https://wa.me/+593988529138", "_blank")
  }

  return (
    <div class="fixed bottom-5 right-5 z-10">
      <Button
        class="btn-success flex justify-center items-center text-white"
        onClick={handleClick}
        icon={<HiOutlinePhone class="size-6" />}
      />
    </div>
  )
}

export default Whatsapp
