import { NextPage } from "next";
import { HomeContainer } from "containers";
import { sanityClient } from "config";

const HomePage: NextPage = ({ services }: any) => {
  console.log(services);

  return <HomeContainer />;
};

export default HomePage;

export async function getStaticProps({ locale }: any) {
  console.log(locale);
  const services = await sanityClient.fetch(`
    *[_type == 'service' && __i18n_lang == '${locale}'] {
      _id,
      name,
      description, 
    }
  `);

  return {
    props: {
      services,
    },
  };
}
