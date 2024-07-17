import { type JSX, type Component, Show } from "solid-js"

interface IButtonProps {
  title?: string
  onClick?: () => void
  icon?: JSX.Element
  class?: string
  isDisabled?: boolean
  isLoading?: boolean
}

const Button: Component<IButtonProps> = (props) => {
  const handleClick = (): void => {
    if (props.onClick) {
      props.onClick()
    }
  }

  return (
    <button
      class={`btn btn-primary flex justify-center items-center gap-2 join-item ${props.class}`}
      onClick={handleClick}
      type={props.onClick ? "button" : "submit"}
      disabled={props.isDisabled || props.isLoading}
    >
      <Show when={props.isLoading} fallback={props.title}>
        <span class="loading loading-spinner" />
      </Show>

      {props.icon}
    </button>
  )
}

export default Button
