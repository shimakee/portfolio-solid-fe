import { A } from "@solidjs/router";
import { Show } from "solid-js";
import { Transition } from "solid-transition-group";
import { isMenuOpen } from "../../store";

const NavComponent = () => (
  <Transition name="slide-fade">
    <Show when={isMenuOpen()}>
      <nav class="bg-green-200 flex flex-col w-40 md:w-60">
        <A href="/portfolio">Portfolio</A>
        <A href="/home/sampleId">Home</A>
        <A href="/">Blog</A>
      </nav>
    </Show>
  </Transition>
);

export default NavComponent;
