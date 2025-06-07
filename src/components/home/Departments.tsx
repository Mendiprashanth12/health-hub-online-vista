
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Departments = () => {
  const departments = [
    {
      name: "Cardiology",
      description: "Heart and cardiovascular care",
      specialists: "15 Specialists"
    },
    {
      name: "Neurology",
      description: "Brain and nervous system treatment",
      specialists: "12 Specialists"
    },
    {
      name: "Pediatrics",
      description: "Healthcare for children and infants",
      specialists: "20 Specialists"
    },
    {
      name: "Orthopedics",
      description: "Bone and joint care",
      specialists: "18 Specialists"
    },
    {
      name: "Oncology",
      description: "Cancer treatment and care",
      specialists: "10 Specialists"
    },
    {
      name: "Emergency",
      description: "24/7 urgent medical care",
      specialists: "25 Specialists"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Departments
          </h2>
          <p className="text-lg text-gray-600">
            Specialized care across multiple medical disciplines
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{dept.name}</CardTitle>
                <CardDescription>{dept.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">{dept.specialists}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
