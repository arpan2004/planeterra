const Philosophy = () => {
  const philosophies = [
    {
      title: "Innovation",
      description:
        "We constantly push the boundaries of what's possible, embracing cutting-edge technologies and creative problem-solving.",
      icon: "🚀",
    },
    {
      title: "Collaboration",
      description:
        "Our strength lies in teamwork, breaking down silos and fostering an environment where diverse ideas can flourish.",
      icon: "🤝",
    },
    {
      title: "Integrity",
      description:
        "We are committed to honesty, transparency, and ethical practices in everything we do.",
      icon: "🛡️",
    },
  ];

  return (
    <div className="bg-neutral-200">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl text-center mb-10">
          Our Core Philosophies
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {philosophies.map((philosophy, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="text-6xl mb-4">{philosophy.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{philosophy.title}</h3>
              <p className="text-gray-600">{philosophy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
