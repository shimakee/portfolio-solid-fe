import { A } from "@solidjs/router";
import { Show } from "solid-js";
import { Transition } from "solid-transition-group";
import { isMenuOpen } from "../../store";

interface NavProps {
  transition: "top" | "bot";
}
const NavComponent = ({ transition }: NavProps) => (
  <Transition name={`slide-${transition}`}>
    <Show when={isMenuOpen()}>
      <nav class="bg-green-200 flex justify-evenly p-5 m-0 relative ">
        <A href="/portfolio">Portfolio</A>
        <A href="/home/sampleId">Home</A>
        <A href="/">Blog</A>
      </nav>
    </Show>
  </Transition>
);

export default NavComponent;
