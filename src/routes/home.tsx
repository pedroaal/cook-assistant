import type { Component } from "solid-js"
import {
  HiSolidEye,
  HiSolidMicrophone,
  HiSolidPaperAirplane,
} from "solid-icons/hi"

import Button from "~/components/shared/Button"

const Home: Component = () => {
  const voice = () => {}
  const vision = () => {}

  return (
    <div class="flex flex-col h-full gap-4">
      <div class="flex-1 flex flex-col gap-2 justify-center items-center">
        <Button
          title="Voice"
          onClick={voice}
          icon={<HiSolidMicrophone class="size-6 text-primary" />}
          class="btn-outline btn-lg btn-wide"
        />
        <Button
          title="Vision"
          onClick={vision}
          icon={<HiSolidEye class="size-6 text-primary" />}
          class="btn-outline btn-lg btn-wide"
        />
      </div>
      <div class="flex gap-2">
        <input
          type="text"
          name="search"
          placeholder="Tell me anything..."
          class="input input-bordered input-primary w-full"
        />
        <button class="btn btn-primary" type="button">
          <HiSolidPaperAirplane class="size-6 text-primary-content" />
        </button>
      </div>
    </div>
  )
}

export default Home
