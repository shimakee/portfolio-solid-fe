import { A, useRoutes } from "@solidjs/router";
import routes from "../routes";

export default function App() {
  const Routes = useRoutes(routes);
  return (
    <>
      <h1>My Site with Lots of Pages</h1>
      <nav>
        <A href="/portfolio">Portfolio</A>
        <A href="/">Home</A>
      </nav>
      <Routes />
    </>
  );
}
