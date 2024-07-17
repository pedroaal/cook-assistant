import { createSignal, type Component, createEffect, Show } from "solid-js"
import { HiOutlineSun, HiOutlineMoon } from "solid-icons/hi"

const ThemeToggler: Component = () => {
  const [isDark, setIsDark] = createSignal(false)

  createEffect(() => {
    setIsDark(localStorage.getItem("theme") === "dracula")
  })

  const handleClick = (): void => {
    const theme = isDark() ? "light" : "dracula"
    localStorage.setItem("theme", theme)
    document.querySelector("html")?.setAttribute("data-theme", theme)
    setIsDark((old) => !old)
  }

  return (
    <button
      class="btn btn-outline btn-square"
      onClick={handleClick}
      type="button"
    >
      <Show when={isDark()} fallback={<HiOutlineSun class="size-6" />}>
        <HiOutlineMoon class="size-6" />
      </Show>
    </button>
  )
}

export default ThemeToggler
