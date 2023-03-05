import { NavLink, useLocation, useRoutes } from "@solidjs/router";
import routes from "../routes";
import { isMenuOpen, setIsMenuOpen } from "../store";
import NavComponent from "./components/navComponent";
import { Transition } from "solid-transition-group";

export default function App() {
  const Routes = useRoutes(routes);
  const location = useLocation();

  return (
    <div class="flex flex-col h-screen bg-purple-200 bg-primary">
      <header class={`bg-secondary p-5 relative z-20 grid`}>
        <img
          class="max-h-12 max-w-12 left-0 relative aspect-square"
          src="https://www.shutterstock.com/image-vector/abstract-crown-people-colorful-logo-600w-1828733366.jpg"
        />
        <button
          class="rounded-full bg-secondary text-primary p-3 flex absolute bottom--20 justify-self-center shadow-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen())}
        >
          <span
            class={`material-symbols-outlined transition-rotate ${
              isMenuOpen() ? "rotate-360" : "rotate-180"
            }`}
          >
            expand_more
          </span>
        </button>
      </header>
      <NavComponent transition="top" isOpen={isMenuOpen} />
      <main class="bg-primary text-secondary flex">
        <Routes />
      </main>
      <NavComponent transition="bot" isOpen={isMenuOpen} />
      <footer class="bg-secondary p-10 z-20 relative grid">
        <button
          class="rounded-full bg-secondary text-primary p-3 flex absolute top--20 justify-self-center shadow-lg"
          onClick={() => window.scrollTo(0, 0)}
        >
          <span
            class={`material-symbols-outlined transition-rotate rotate-360`}
          >
            expand_more
          </span>
        </button>
        <p>This will be replaced with an actual footer</p>
      </footer>
    </div>
  );
}
