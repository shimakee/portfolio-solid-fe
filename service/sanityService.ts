import { createClient } from "@sanity/client";

const projectId = import.meta.env.VITE_PROJECT_ID;
const dataset = import.meta.env.VITE_DATASET;
const token = import.meta.env.VITE_SANITY_TOKEN;

const clientService = createClient({
  projectId,
  dataset,
  token,
  useCdn: false,
});

export enum contentTypeEnum {
  COLLECTION = "collection",
  POST = "post",
  PROFILE = "profile",
  PROJECT = "project",
  RESOURCE = "resource",
  WORK = "work",
}

export enum orderEnum {
  ASC = "asc",
  DESC = "desc",
}

interface queryItemsParams {
  type: contentTypeEnum;
  specifier?: string;
  properties?: string[];
  page?: number;
  limit?: number;
  order?: orderEnum;
  orderBy?: string;
  condition?: string;
}

//used to build custom queries
export const sanityQuery = async (query: string) => {
  const result = await clientService.fetch(query);

  return result;
};

//generic use for pagination
export const queryItems = async <T>({
  type,
  specifier,
  properties,
  page,
  limit,
  order,
  orderBy,
  condition,
}: queryItemsParams): Promise<T[]> => {
  const isSingle = limit && (limit === 1 || limit === 0);
  const limitMax = limit && limit > 20 ? 20 : limit || 10;
  const startIndex = 0 * (page || 1);
  const lastIndex = startIndex + (limitMax - 1);
  const resultLength = isSingle ? `[0]` : `[${startIndex}..${lastIndex}]`;
  const queryString = `*[_type == "${type}" ${
    condition ? `&& ${condition}` : ""
  }]${specifier ? `.${specifier}` : ""}${
    properties ? `{${properties.toString()}}` : ""
  }| order(${orderBy || ""} ${order || orderEnum.ASC})${resultLength}`;

  return await clientService.fetch(queryString);
};

export default { sanityQuery, queryItems };
