import { createSignal, useTransition } from "solid-js";

export const [isMenuOpen, setIsMenuOpen] = createSignal(true);
export const [activeLink, setActiveLink] = createSignal<string>("home");

// const [pending, start] = useTransition();
// const updateIsMenuOpen = (isOpen: boolean) => () =>
//   start(() => setIsMenuOpen(isOpen));
