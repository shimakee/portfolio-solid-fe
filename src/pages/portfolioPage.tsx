import { createQuery, useQueryClient } from "@tanstack/solid-query";
import { Match, Switch } from "solid-js";
import { getProfile } from "../../service/profileService";
import { Profile } from "../../dataTypes";

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
        <div class="w-full bg-black text-slate-400 overflow-ellipsis p-3 break-words">
          {/* invalidates your queries */}
          <button
            onClick={() => queryClient.invalidateQueries(["profileData"])}
          >
            Refetch
          </button>
          <p>{JSON.stringify(query.data)}</p>
        </div>
      </Match>
    </Switch>
  );
};

export default PortfolioPage;
