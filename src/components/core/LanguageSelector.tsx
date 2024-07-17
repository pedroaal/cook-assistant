import { type Component, For } from "solid-js"

import { useTranslateStore } from "~/context/locale.context"

const LANGS = [
  { value: "es", label: "ES" },
  { value: "en", label: "EN" },
]

const LanguageSelector: Component = () => {
  const { locale, setLocale } = useTranslateStore()

  return (
    <div class="dropdown dropdown-end">
      <div tabIndex={0} class="btn btn-ghost" role="button">
        {LANGS.find((item) => locale() === item.value)?.label}
      </div>
      <ul
        tabIndex={0}
        class="dropdown-content mt-2 p-2 shadow menu z-10 bg-base-100 rounded-box w-52"
      >
        <For each={LANGS}>
          {(item) => (
            <li onClick={() => setLocale(item.value)}>
              <p>{item.label}</p>
            </li>
          )}
        </For>
      </ul>
    </div>
  )
}

export default LanguageSelector
