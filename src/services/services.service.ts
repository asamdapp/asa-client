import { sanityClient } from 'utils';

export const getServices = async (locale: string) => {
  const services = await sanityClient.fetch(`
    *[_type == 'service' && __i18n_lang == '${locale}'] {
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
  const services = await sanityClient.fetch(`
    *[_type=="service" && slug.current == '${slug}']
      {
        _id,
        name,
        slug,
        description, 
        body,
        image
      }
    [0]
  `);
  return services;
};
