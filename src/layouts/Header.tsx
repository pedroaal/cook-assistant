import type { Component } from "solid-js"
import { HiOutlineBars3 } from "solid-icons/hi"
import { A, useNavigate } from "@solidjs/router"

import { ICONS } from "~/config/assets"
import { ROUTES } from "~/constants/router"
import { addDefault } from "~/utils/strings"
import { useTranslateStore } from "~/context/locale.context"

import Button from "~/components/shared/Button"
import LanguageSelector from "~/components/core/LanguageSelector"

const LeftLinks: Component = () => {
  const { t } = useTranslateStore()

  return (
    <>
      {/* <li>
        <A href={ROUTES.home}>{t('navigation.home')}</A>
      </li> */}
      <li>
        <A href={ROUTES.about}>{addDefault(t("navigation.about"))}</A>
      </li>
      <li>
        <A href={ROUTES.discover}>{addDefault(t("navigation.discover"))}</A>
      </li>
    </>
  )
}

const RightLinks: Component = () => {
  const { t } = useTranslateStore()

  return (
    <>
      <li>
        <A href={ROUTES.places}>{addDefault(t("navigation.places"))}</A>
      </li>
      <li>
        <A href={ROUTES.contact}>{addDefault(t("navigation.contact"))}</A>
      </li>
    </>
  )
}

const Header: Component = () => {
  const { t } = useTranslateStore()
  const navigate = useNavigate()

  return (
    <div class="shadow-sm bg-neutral-100">
      <header class="navbar container mx-auto">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabIndex={0} role="button" class="btn btn-ghost md:hidden">
              <HiOutlineBars3 class="size-6" />
            </div>
            <ul
              tabIndex={0}
              class="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <LeftLinks />
              <RightLinks />
            </ul>
          </div>
          <div class="h-14 w-20 rounded md:hidden">
            <A href={ROUTES.home}>
              <img src={ICONS.logo} alt="logo" />
            </A>
          </div>
        </div>

        <div class="navbar-center hidden md:flex">
          <ul class="menu menu-horizontal gap-1 items-center">
            <LeftLinks />
            <div class="h-20 w-32 rounded">
              <A href={ROUTES.home}>
                <img src={ICONS.logo} alt="logo" />
              </A>
            </div>
            <RightLinks />
          </ul>
        </div>

        <div class="navbar-end">
          <LanguageSelector />
          <Button
            title={addDefault(t("navigation.action"))}
            class="text-lg"
            onClick={() => {
              navigate(ROUTES.brochure)
            }}
          />
        </div>
      </header>
    </div>
  )
}

export default Header
