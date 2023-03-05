import { Router } from "@solidjs/router";
import { render } from "solid-js/web";
import App from "./app";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";

const root = document.getElementById("root");
const queryClient = new QueryClient();

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?"
  );
}

render(
  () => (
    <Router>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Router>
  ),
  root!
);
