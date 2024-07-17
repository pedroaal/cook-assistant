import type { Component } from "solid-js"
import { FaBrandsFacebook } from "solid-icons/fa"

import { ICONS } from "~/config/assets"
import { ROUTES } from "~/constants/router"
import { useTranslateStore } from "~/context/locale.context"
import { addDefault } from "~/utils/strings"

const Footer: Component = () => {
  const { t } = useTranslateStore()

  return (
    <div class="p-8 shadow bg-neutral-100">
      <div class="container mx-auto w-full flex flex-col gap-6">
        <div class="flex flex-col md:flex-row gap-6 justify-center items-center">
          <div class="md:w-1/3 flex justify-end">
            <img
              src={ICONS.logo}
              alt="logo buro turistico"
              class="w-56 h-36 object-cover"
            />
          </div>

          <ul class="flex gap-6 md:w-1/3 justify-between">
            <li>
              <a href={ROUTES.about}>{addDefault(t("navigation.about"))}</a>
            </li>
            <li>
              <a href={ROUTES.discover}>
                {addDefault(t("navigation.discover"))}
              </a>
            </li>
            <li>
              <a href={ROUTES.contact}>{addDefault(t("navigation.contact"))}</a>
            </li>
          </ul>

          <div class="flex gap-2 md:w-1/3 justify-start">
            {/* <FaBrandsInstagram class="size-6" /> */}
            <a href="https://www.facebook.com/buromanta">
              <FaBrandsFacebook class="size-6" />
            </a>
          </div>
        </div>

        <div class="flex gap-2 justify-center items-center">
          {addDefault(t("footer.powered"))}
          <img
            src={ICONS.logoPrana}
            alt="logo prana"
            class="w-24 h-12 object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
