import { sanityClient } from "../config";

export const getServices = async (locale: string) => {
  const services = await sanityClient.fetch(`
    *[_type == 'service' && __i18n_lang == '${locale}'] {
      _id,
      name,
      description, 
      body,
      image
    }
  `);
  return services;
};
