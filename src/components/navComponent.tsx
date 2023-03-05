import { A, useLocation } from "@solidjs/router";
import { createEffect, createSignal, For, Show } from "solid-js";
import { Transition } from "solid-transition-group";
import { activeLink, isMenuOpen, setActiveLink } from "../../store";

interface NavProps {
  transition: "top" | "bot";
  isOpen: () => boolean;
}

interface LinkProps {
  link: string;
  activeLink: () => string;
  onClick: (name: string) => void;
}

const links = ["home", "portfolio", "projects", "works"];

const LinkComponent = (props: LinkProps) => (
  <A
    class={`${
      props.activeLink() === props.link
        ? " text-slate-100 bg-zinc-900 "
        : "bg-slate-100 text-zinc-900"
    } p-5 transition-all`}
    href={`/${props.link}`}
    onClick={() => props.onClick(props.link)}
  >
    {props.link}
  </A>
);

const NavComponent = (props: NavProps) => {
  createEffect(() => {
    setActiveLink(useLocation().pathname.split("/")[1]);
  });

  return (
    <Transition name={`slide-${props.transition}`}>
      <Show when={props.isOpen()}>
        <nav
          class={`bg-green-200 flex justify-evenly m-0 w-full ${
            props.transition === "top" ? "top-0" : "bottom-0"
          }`}
        >
          <For each={links} fallback={<div>loading links...</div>}>
            {(link) => (
              <LinkComponent
                link={link}
                activeLink={activeLink}
                onClick={setActiveLink}
              />
            )}
          </For>
        </nav>
      </Show>
    </Transition>
  );
};

export default NavComponent;
