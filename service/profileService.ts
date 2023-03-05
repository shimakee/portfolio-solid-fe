import { RouteDataFuncArgs } from "@solidjs/router";
import { createResource } from "solid-js";
import { Profile } from "../types";
import { contentTypeEnum, orderEnum, queryItems } from "./sanityService";
import profileJson from "../mockData/profile.json";

export const getProfile = () => {
  const profileMock = createResource(() => {
    return profileJson;
  });
  return profileMock;

  const profile = createResource("profileId", async () => {
    const queryParams = {
      type: contentTypeEnum.PROFILE,
      condition: `_id == "2c11642d-c32b-46ff-81f8-c21187597e68"`,
      limit: 1,
      properties: [
        "_id",
        '"profileImage": profileImage.asset->url',
        "identity",
        "contact",
        '"skills": skills[]->{type, title, description,"image":image.asset->url}',
        '"socials": socials[]->{icon, name, href}',
      ],
    };
    return await queryItems<Profile[]>(queryParams);
  });

  return profile;
};

// export const getProperties = ({ params }: RouteDataFuncArgs) => {
//   // @TODO: figure out how to combine using params & searchQueries
//   // params for the page /properties/:page, /properties/:page/:category|tag
//   // queries for the order, orderBy, limit
//   const [properties] = createResource(
//     params.order || "",
//     async (order: string) => {
//       const queryParams = {
//         type: contentTypeEnum.PROPERTY,
//         orderBy: order,
//         properties: [
//           "_id",
//           "name",
//           "title",
//           "details",
//           '"heroImage": heroImage.asset->url',
//           '"gallery": {"images": gallery.images[].asset->url, "display": gallery.display}',
//           "address",
//           "price",
//           "datePurchased",
//           "lotSize",
//           "floorSize",
//           "canShowOwners",
//           '"owners": owner[]->{client,"profileImage":profileImage.asset->url, address}',
//           '"tags": tag',
//         ],
//       };
//       return await queryItems<Property[]>(queryParams);
//     }
//   );

//   return properties;
// };

// //When route params change gets called again
// export const getAgentIdentities = ({ params }: RouteDataFuncArgs) => {
//   const [agents] = createResource(params.order || "", async (order: string) => {
//     const queryParams = {
//       type: contentTypeEnum.AGENT,
//       orderBy: order,
//       specifier: contentTypeEnum.AGENT,
//     };
//     return await queryItems<Identity>(queryParams);
//   });

//   return agents;
// };

// //When route params change gets called again
// export const getAgents = ({ params }: RouteDataFuncArgs) => {
//   const [agents] = createResource(params.order || "", async (order: string) => {
//     const queryParams = {
//       type: contentTypeEnum.AGENT,
//       orderBy: order,
//       properties: [
//         "_id",
//         "agent",
//         "contact",
//         '"profileImage": profileImage.asset->url ',
//       ],
//     };
//     return await queryItems<Agent>(queryParams);
//   });

//   return agents;
// };

// //When url args change gets called again
// export const getAgentsBySearchQuery = () => {
//   const [agents] = createResource(
//     () => useLocation().search,
//     async (searchParam) => {
//       const searchArgs = Object.fromEntries(
//         new URLSearchParams(searchParam).entries()
//       );

//       const queryParams = {
//         type: contentTypeEnum.AGENT,
//         orderBy: `agent.${searchArgs.orderBy || "last"}`,
//         order: (searchArgs.order as orderEnum) || orderEnum.ASC,
//         properties: [
//           "_id",
//           "agent",
//           "contact",
//           '"profileImage": profileImage.asset->url ',
//         ],
//       };
//       return await queryItems<Agent>(queryParams);
//     }
//   );
//   return agents;
// };
