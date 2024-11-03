import droneImage from "../assets/drone-shot.png";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen"
      style={{ backgroundImage: `url(${droneImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center">
          Elevate Your Perspective With Our Drone Services
        </h1>
        <p className="text-base md:text-lg text-white mb-6 text-center mx-4">
          Capture stunning aerial footage and images with our professional drone
          services. Whether you need aerial photography, videography, mapping,
          or inspections, we have you covered.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button className="px-6 py-2 bg-red-500 text-white font-bold hover:bg-slate-600">
            Explore Our Services
          </button>
          <button className="px-6 py-2 bg-white text-red-500 font-bold hover:bg-slate-600 hover:text-white">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;