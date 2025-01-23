import About from "../components/About";
import Form from "../components/Form";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Form />
    </>
  );
};

export default Home;
