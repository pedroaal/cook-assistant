import type { JSXElement, Component } from "solid-js"

interface IBodyProps {
  children: JSXElement
  class?: string
}

interface IProps {
  id?: string
  children: JSXElement
  class?: string
  style?: Record<string, string>
}

interface IComposition {
  Body: Component<IBodyProps>
}

export const Body: Component<IBodyProps> = (props) => {
  return (
    <div
      class={`w-full md:w-3/4 mx-auto my-4 px-4 md:my-10 md:px-10 ${props.class}`}
    >
      {props.children}
    </div>
  )
}

const Section: Component<IProps> & IComposition = (props) => (
  <section id={props.id} class={`w-full ${props.class}`} style={props.style}>
    {props.children}
  </section>
)

Section.Body = Body

export default Section
