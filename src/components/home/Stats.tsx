
const Stats = () => {
  const stats = [
    { number: "50,000+", label: "Patients Treated" },
    { number: "150+", label: "Medical Experts" },
    { number: "25+", label: "Years of Experience" },
    { number: "24/7", label: "Emergency Service" }
  ];

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
