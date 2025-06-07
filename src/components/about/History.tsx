
const History = () => {
  const milestones = [
    {
      year: "1975",
      title: "Hospital Founded",
      description: "MediCare Plus was established as a 50-bed community hospital."
    },
    {
      year: "1985",
      title: "First Expansion",
      description: "Added cardiac care unit and expanded to 150 beds."
    },
    {
      year: "1995",
      title: "Technology Advancement",
      description: "Introduced state-of-the-art MRI and CT scanning equipment."
    },
    {
      year: "2005",
      title: "Cancer Center Opening",
      description: "Opened comprehensive cancer treatment and research center."
    },
    {
      year: "2015",
      title: "Digital Transformation",
      description: "Implemented electronic health records and telemedicine services."
    },
    {
      year: "2024",
      title: "Present Day",
      description: "Leading regional healthcare provider with 500+ beds and 1000+ staff."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-gray-600">
            Nearly 50 years of serving our community with dedication and excellence
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-2"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
