import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "84ktv72i",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});
