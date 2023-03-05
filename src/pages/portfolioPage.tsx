import { useRouteData } from "@solidjs/router";
import { ResourceReturn, Show } from "solid-js";
import { Profile } from "../../types";

export const PortfolioPage = () => {
  const [data] = useRouteData<ResourceReturn<Profile>>();

  return (
    <Show when={data} fallback={<p>Invalid property id</p>}>
      {data && JSON.stringify(data())}
    </Show>
  );
};

export default PortfolioPage;
