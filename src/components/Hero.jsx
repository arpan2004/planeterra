import droneImage from "../assets/drone-shot.png";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen"
      style={{ backgroundImage: `url(${droneImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          Welcome to Planeterra!
        </h1>
        <p className="text-lg text-white mb-6">
          The best place for aerial photography, surveillance, surveys, and more
          using our state of the art drones.
        </p>
        <button className="px-6 py-2 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-300">
          GET IN TOUCH
        </button>
      </div>
    </section>
  );
};

export default Hero;
