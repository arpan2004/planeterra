import technician from "../assets/drone-technician.png";

const About = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src={technician}
            alt="drone technician"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold mb-4">The best drone services in the U.S</h2>
          <p className="text-lg mb-4">
            Planeterra is dedicated to providing professional and award-winning
            quality service for photography, ground surveillance, site surveys,
            and so much more. Whether you want to photograph your home, capture
            stunning aerial footage, or inspect your property, we have the
            expertise and equipment to get the job done. Our technology empowers
            you to bring your vision to life. Explore our many services and let
            us help you capture the world from a higher perspective with
            Planeterra LLC.
          </p>
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
