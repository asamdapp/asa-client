import { NextPage } from "next";
import { HomeContainer } from "containers";
import { getServices } from "services";

const HomePage: NextPage = ({ services }: any) => {
  console.log(services);

  return (
    <>
      {/*<PortableText value={services[0]?.body} />*/}
      <HomeContainer />
    </>
  );
};

export default HomePage;

export async function getStaticProps({ locale }: any) {
  const services = await getServices(locale);

  return {
    props: {
      services,
    },
  };
}
