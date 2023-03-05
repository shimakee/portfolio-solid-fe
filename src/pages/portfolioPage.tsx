import { createQuery, useQueryClient } from "@tanstack/solid-query";
import { Match, Switch } from "solid-js";
import { getProfile } from "../../service/profileService";
import { Profile } from "../../types";

export const PortfolioPage = () => {
  const queryClient = useQueryClient();
  const query = createQuery<Profile, any>(() => ["profileData"], getProfile, {
    staleTime: Infinity, // never refetch data always fresh until invalidated
  });

  return (
    <Switch>
      <Match when={query.isLoading}>
        <p>is Loading...</p>
      </Match>
      <Match when={query.isError}>
        <p>Error: {query.error?.message}</p>
      </Match>
      <Match when={query.isSuccess}>
        {/* invalidates your queries */}
        <button onClick={() => queryClient.invalidateQueries(["profileData"])}>
          Refetch
        </button>
        {JSON.stringify(query.data)}
      </Match>
    </Switch>
  );
};

export default PortfolioPage;
