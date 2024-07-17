import { For, Show, type Component } from "solid-js"

import type { IOption } from "~/types/core"

interface ISelectProps {
  label?: string
  onChange: (val: string) => void
  value: string
  options: IOption[]
  class?: string
}

const Select: Component<ISelectProps> = (props) => (
  <label class="form-control w-full max-w-xs">
    <Show when={props.label}>
      <div class="label">
        <span class="label-text">{props.label}</span>
      </div>
    </Show>
    <select
      class={`select select-bordered w-full max-w-xs ${props.class}`}
      onChange={(e) => {
        props.onChange(e.currentTarget.value)
      }}
      value={props.value}
    >
      <For each={props.options}>
        {(metric) => <option value={metric.value}>{metric.label}</option>}
      </For>
    </select>
  </label>
)

export default Select
