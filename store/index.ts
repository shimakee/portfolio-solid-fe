import { createSignal, useTransition } from "solid-js";

export const [isMenuOpen, setIsMenuOpen] = createSignal(true);
// const [pending, start] = useTransition();
// const updateIsMenuOpen = (isOpen: boolean) => () =>
//   start(() => setIsMenuOpen(isOpen));
