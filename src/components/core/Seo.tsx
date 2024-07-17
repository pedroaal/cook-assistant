import { Meta, Title } from "@solidjs/meta"
import type { Component } from "solid-js"

const Seo: Component = () => (
  <>
    <Title>Buro Turistico</Title>
    <Meta property="og:image" content="https://visitmanta.org/logos/logo.png" />
    <Meta property="og:image:alt" content="buro turistico logo" />
    <Meta property="og:image:width" content="1200" />
    <Meta property="og:image:height" content="600" />
    <Meta property="og:site_name" content="Buro Turistico" />
  </>
)

export default Seo
