import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: "ncgx1lca",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});


export function urlFor(source: any) {
  const builder = imageUrlBuilder(client);
  return builder.image(source);
};