import { useRouteData } from "@solidjs/router";
import { createQuery, useQueryClient } from "@tanstack/solid-query";
import { ResourceReturn, Show } from "solid-js";
import { getProfile } from "../../service/profileService";
import { Profile } from "../../types";

export const PortfolioPage = () => {
  // const [data] = useRouteData<ResourceReturn<Profile>>();
  const queryClient = useQueryClient();
  const query = createQuery(() => ["profileData"], getProfile, {
    staleTime: Infinity, // never refetch data always fresh until invalidated
  });

  return (
    // <Show when={data} fallback={<p>Invalid property id</p>}>
    //   {JSON.stringify(data())}
    // </Show>
    <Show when={query.isSuccess} fallback={<p>Invalid property id</p>}>
      {/* invalidates your queries */}
      <button onClick={() => queryClient.invalidateQueries(["profileData"])}>
        Refetch
      </button>
      {query.data && JSON.stringify(query.data[0]())}
    </Show>
  );
};

export default PortfolioPage;
