import { NextPage } from "next";
import { HomeContainer } from "containers";

const HomePage: NextPage = () => {
  return <HomeContainer />;
};

export default HomePage;

export const getServerSideProps = async (context: any) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();

  return {
    props: { data },
  };
};
