import technician from "../assets/drone-technician.png";

const WhyChooseUs = () => {
  const reasons = [
    "GeoPotential's Engineers always keep in mind local/state and federal environmental regulations including RPA. This ensures that the environment is protected as we develop the next generation of projects.",
    "We have the qualifications and education in Geotechnical, Geothermal, Environmental, and Green Energy to support you on any residential, commercial, or government project.",
    "Our model of \"be there from start to finish\" has helped our clients achieve their goals efficiently and effectively.",
    "Gibberish.",
    "Placeholder",
    "Placeholder 2"
  ];

  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-300 p-6">
      {/* Left Side - Image */}
      <div className="md:w-1/2 w-full">
        <img
          src={technician}
          alt="Construction workers"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
      {/* Right Side - Text Content */}
      <div className="md:w-1/2 w-full p-8 space-y-12">
        <h2 className="text-4xl">Why Choose Us</h2>
        <div className="space-y-6 text-lg font-light">
          {reasons.map((reason, index) => (
            <div key={index}>
              <span className="font-medium text-blue-600 mr-2">•</span>
              {reason}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;