import { Outlet, useParams } from "@solidjs/router";
import { createSignal } from "solid-js";

const HomePage = () => {
  const param = useParams();

  return (
    <>
      <span>This is the home page - {param.id}</span>
      <Outlet />
    </>
  );
};

export default HomePage;
