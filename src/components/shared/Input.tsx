import { Show, type Component, type JSX, splitProps } from "solid-js"

interface IInputProps {
  label?: string
  value: string | undefined
  disabled?: boolean
  placeholder?: string
  name?: string
  required?: boolean
  error?: string
  type?: "text" | "email" | "tel" | "password" | "url" | "date"
  class?: string
  onInput?: JSX.EventHandler<HTMLInputElement, InputEvent>
  onChange?: JSX.EventHandler<HTMLInputElement, Event>
  onBlur?: JSX.EventHandler<HTMLInputElement, FocusEvent>
  ref?: (element: HTMLInputElement) => void
}

const Input: Component<IInputProps> = (props) => {
  const [, inputProps] = splitProps(props, ["value", "label", "error", "class"])

  return (
    <div class="form-control w-full join-item">
      <Show when={props.label}>
        <label class="label" for={props.name}>
          <span class="label-text">{props.label}</span>
        </label>
      </Show>
      <input
        {...inputProps}
        id={props.name}
        value={props.value ?? ""}
        class={`input input-bordered w-full ${props.class}`}
        classList={{
          "input-error": props.error,
        }}
        aria-invalid={!!props.error}
        aria-errormessage={`${props.name}-error`}
      />
      <Show when={props.error}>
        <p class="text-error" id={`${props.name}-error`}>
          <small>{props.error}</small>
        </p>
      </Show>
    </div>
  )
}

export default Input
