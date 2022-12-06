import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "1y9cb2jl",
  dataset: "production",
  apiVersion: "2022-12-05",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
