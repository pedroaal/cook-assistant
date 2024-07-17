import { type Component, For, Show, type JSX } from "solid-js"
import {
  HiOutlineCheckCircle,
  HiOutlineExclamationCircle,
  HiOutlineExclamationTriangle,
  HiOutlineInformationCircle,
} from "solid-icons/hi"

import { useCoreStore } from "~/context/core.context"

interface IConfig {
  color: string
  icon: JSX.Element
}

const Alerts: Component = () => {
  const { alerts } = useCoreStore()

  const getConfig = (type: string): IConfig => {
    switch (type) {
      case "success":
        return {
          color: "alert-success",
          icon: <HiOutlineCheckCircle class="size-6" />,
        }
      case "error":
        return {
          color: "alert-error",
          icon: <HiOutlineExclamationCircle size="size-6" />,
        }
      case "warning":
        return {
          color: "alert-warning",
          icon: <HiOutlineExclamationTriangle size="size-6" />,
        }
      default:
        return {
          color: "alert-info",
          icon: <HiOutlineInformationCircle size="size-6" />,
        }
    }
  }

  return (
    <Show when={alerts().length > 0}>
      <div class="w-full md:w-1/2 fixed top-0 right-0 overflow-y-auto z-50">
        <div class="flex flex-col gap-4 p-4">
          <For each={alerts()}>
            {(alert) => {
              const { color, icon } = getConfig(alert.type)

              return (
                <div class={`alert ${color}`} role="alert">
                  {icon}
                  <div class="flex flex-col gap-2">
                    <span>{alert.message}</span>
                    <Show when={alert.description}>
                      <span>{alert.description}</span>
                    </Show>
                  </div>
                </div>
              )
            }}
          </For>
        </div>
      </div>
    </Show>
  )
}

export default Alerts
