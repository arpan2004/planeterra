import About from "../components/About";
import Form from "../components/Form";
import Hero from "../components/Hero";
import Services from "../components/Services";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Planeterra - Professional Drone Solutions";
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Form />
    </>
  );
};

export default Home;
