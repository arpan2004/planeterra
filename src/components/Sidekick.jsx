import PropTypes from "prop-types";
import droneImage from "../assets/drone-shot.png";

const Sidekick = ({text, para}) => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${droneImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center">
          {text}
        </h1>
        <p className="text-base md:text-lg text-white mb-6 text-center mx-4 py-4 max-w-4xl">
          {para}
        </p>
        <button className="px-6 py-2 bg-white text-blue-700 font-bold hover:bg-slate-600 hover:text-white">
            Contact Us
        </button>
      </div>
    </section>
  )
}

Sidekick.propTypes = {
    text: PropTypes.string.isRequired,
    para: PropTypes.string,
};

export default Sidekick