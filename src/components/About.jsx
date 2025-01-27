import technician from "../assets/drone-technician.png";

const About = () => {
  return (
    <section className="py-20 bg-amber-50 items-start px-4 sm:px-8">
      <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8 items-start">
        <div className="w-full sm:w-1/2">
          <img
            src={technician}
            alt="drone technician"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="h-0.5 w-full sm:h-52 sm:w-0.5 bg-black"></div>

        <div className="w-full sm:w-1/2 space-y-8">
          <div className="space-y-3 sm:space-y-5">
            <h2 className="text-3xl sm:text-5xl font-light">
              High-Quality Aerial Photography
            </h2>
            <p className="text-gray-700 text-sm sm:text-base">
              Capture stunning aerial shots with our professional drone
              photography services.
            </p>
          </div>
          <div className="space-y-3 sm:space-y-5">
            <h2 className="text-3xl sm:text-5xl font-light">Precise Inspections</h2>
            <p className="text-gray-700 text-sm sm:text-base">
              Perform detailed inspections with our advanced drone technology,
              saving time and improving accuracy.
            </p>
          </div>
          <div className="space-y-3 sm:space-y-5">
            <h2 className="text-3xl sm:text-5xl font-light">Mapping and Surveying</h2>
            <p className="text-gray-700 text-sm sm:text-base">
              Utilize our drones for mapping and surveying tasks, providing
              valuable data for various industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
