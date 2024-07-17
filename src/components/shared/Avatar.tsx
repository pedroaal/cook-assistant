import type { Component } from "solid-js"

interface IProps {
  thumbnail: string
}

const Avatar: Component<IProps> = (props) => (
  <div class="avatar">
    <div class="w-12 rounded-full">
      <img src={props.thumbnail} alt="avatar" />
    </div>
  </div>
)

export default Avatar
