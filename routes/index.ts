import { lazy } from "solid-js";
import { getProfile } from "../service/profileService";

const PortfolioPage = lazy(() => import("../src/pages/portfolioPage"));
export const routes = [
  {
    path: "portfolio",
    data: getProfile,
    component: PortfolioPage,
  },
  {
    path: "/",
    element: "This the home page",
  },
  //   {
  //     path: "/",
  //     children: [
  //       // { path: '/', element: 'this is index' },
  //       // {
  //       // 	path: 'agents',
  //       // 	children: [
  //       // 		{ path: ':order', data: getAgents, component: agentsComponent },
  //       // 		{ path: '*', data: getAgents, component: agentsComponent },
  //       // 	],
  //       // },
  //       {
  //         path: ["properties", "property"],
  //         children: [
  //           { path: "/", data: getProperties, component: propertiesComponent },
  //           {
  //             path: ":propertyId",
  //             data: getProperty,
  //             component: lazy(() => import("../components/propertyDetails")),
  //           },
  //           { path: "*", data: getProperties, component: propertiesComponent },
  //         ],
  //       },
  //       {
  //         path: ["/", "branches", "branch"],
  //         children: [
  //           { path: "/", data: getBranches, component: branchesComponent },
  //           {
  //             path: ":branchId",
  //             data: getBranch,
  //             component: lazy(() => import("../components/branchDetails")),
  //           },
  //           { path: "*", data: getBranches, component: branchesComponent },
  //         ],
  //       },
  //       // { path: 'listings', data: getAgentsBySearchQuery, component: lazy(() => import('../components/listings')) },
  //       // { path: 'rentals', component: lazy(() => import('../components/rentals')) },
  //     ],
  //   },
];

export default routes;
