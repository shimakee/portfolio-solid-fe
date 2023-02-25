import { useRoutes } from "@solidjs/router";
import routes from "../routes";
import { isMenuOpen, setIsMenuOpen } from "../store";
import NavComponent from "./components/navComponent";
import { Transition } from "solid-transition-group";

export default function App() {
  const Routes = useRoutes(routes);
  return (
    <div class="flex flex-col h-screen bg-purple-200">
      <header class="bg-red-200 p-3 h-24">
        <button onClick={() => setIsMenuOpen(!isMenuOpen())}>
          <span class="material-symbols-outlined">menu</span>
        </button>
        <Transition
          name="fade"
          onEnter={(el, done) => {
            const a = el.animate([{ opacity: 0 }, { opacity: 1 }], {
              duration: 600,
            });
            a.finished.then(done);
          }}
          onExit={(el, done) => {
            const a = el.animate([{ opacity: 1 }, { opacity: 0 }], {
              duration: 600,
            });
            a.finished.then(done);
          }}
        >
          {isMenuOpen() && <span>thingy</span>}
        </Transition>
      </header>
      <div class="flex h-full">
        <NavComponent />
        <main class="bg-blue-200 w-full">
          <Routes />
        </main>
      </div>
      <footer class="bg-yellow-200 h-24">
        This will be replaced with an actual footer
      </footer>
    </div>
  );
}
