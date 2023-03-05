import { useRoutes } from "@solidjs/router";
import routes from "../routes";
import { isMenuOpen, setIsMenuOpen } from "../store";
import NavComponent from "./components/navComponent";
import { Transition } from "solid-transition-group";

export default function App() {
  const Routes = useRoutes(routes);
  return (
    <div class="flex flex-col h-screen bg-purple-200">
      <header class="bg-red-200 p-5 relative z-10 grid">
        <img
          class="max-h-12 max-w-12 left-0 relative aspect-square"
          src="https://www.shutterstock.com/image-vector/abstract-crown-people-colorful-logo-600w-1828733366.jpg"
        />
        <button
          class="rounded-full bg-white text-black-100 p-3 flex absolute bottom--20 justify-self-center"
          onClick={() => setIsMenuOpen(!isMenuOpen())}
        >
          <span
            class={`material-symbols-outlined transition-rotate ${
              isMenuOpen() ? "rotate-180" : "rotate-360"
            }`}
          >
            expand_more
          </span>
        </button>
      </header>
      <NavComponent transition="top" />
      <main class="bg-blue-200 flex p-3">
        <Routes />
      </main>
      <NavComponent transition="bot" />
      <footer class="bg-yellow-200 p-10 z-10 relative">
        <button onClick={() => setIsMenuOpen(!isMenuOpen())}>
          <span class="material-symbols-outlined">menu</span>
        </button>
        <p>This will be replaced with an actual footer</p>
      </footer>
    </div>
  );
}
