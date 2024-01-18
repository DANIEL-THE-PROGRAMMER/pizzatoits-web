'use client'

import { useMouseHoverAndMenuContext } from "../context/globalcontext";

export default function About() {

  const { loading } = useMouseHoverAndMenuContext()

  console.log(loading)
  
  return <>About</>;
}
