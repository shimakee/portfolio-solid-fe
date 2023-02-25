import { useRouteData } from "@solidjs/router";
import { Resource, Show } from "solid-js";
import { ProfileResource } from "../../types";

export const PortfolioPage = () => {
  const profile = useRouteData<Resource<ProfileResource>>();

  return (
    <Show when={profile?.()} fallback={<p>Invalid property id</p>}>
      {profile && JSON.stringify(profile())}
    </Show>
  );
};

export default PortfolioPage;
