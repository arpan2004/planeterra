import Philosophy from "../components/Philosophy"
import Sidekick from "../components/Sidekick";
import WhyChooseUs from "../components/WhyChooseUs";
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us | Planeterra";
  }, []);

  return (
    <>
      <Sidekick text="About Us" para="Planeterra was established in 2024 with the vision of providing innovative and cutting-edge solutions for our clients. Our dedicated team of drone operators and project managers delivers rapid, reliable, and precise aerial services tailored to meet diverse project needs. From aerial inspections to mapping and photography, we create efficient, cost-effective, and high-quality solutions to enhance your operations, ensuring accuracy and reliability throughout every phase of the project." />
      <Philosophy />
      <WhyChooseUs />
    </>
  );
};

export default AboutPage;
