import { sanityClient } from 'utils';

export const getServices = async (locale: string) => {
  const services = await sanityClient.fetch(`
    *[_type == 'service' && __i18n_lang == '${locale}'] | order(_updatedAt desc) {
      _id,
      name,
      slug,
      image,
      isServiceForLanguage
    }
  `);
  return services;
};

export const getServiceBySlug = async (slug: string) => {
  const service = await sanityClient.fetch(`
    *[_type=="service" && slug.current == '${slug}']
      {
        _id,
        name,
        slug,
        description, 
        body,
        image,
        isServiceForLanguage
      }
    [0]
  `);
  return service;
};
