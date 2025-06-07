
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Team = () => {
  const doctors = [
    {
      name: "Dr. Sarah Wilson",
      specialty: "Chief of Cardiology",
      experience: "15+ years",
      description: "Specialized in interventional cardiology and heart disease prevention."
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Neurosurgeon",
      experience: "20+ years",
      description: "Expert in brain and spine surgery with minimally invasive techniques."
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      experience: "12+ years",
      description: "Dedicated to providing comprehensive care for children and adolescents."
    },
    {
      name: "Dr. James Thompson",
      specialty: "Emergency Medicine",
      experience: "18+ years",
      description: "Leading our emergency department with expertise in critical care."
    },
    {
      name: "Dr. Lisa Park",
      specialty: "Oncologist",
      experience: "14+ years",
      description: "Specializing in cancer treatment and personalized therapy approaches."
    },
    {
      name: "Dr. David Kumar",
      specialty: "Orthopedic Surgeon",
      experience: "16+ years",
      description: "Expert in joint replacement and sports medicine procedures."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-gray-600">
            Our dedicated medical professionals are committed to your health and well-being
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{doctor.name}</CardTitle>
                <CardDescription className="text-primary font-semibold">
                  {doctor.specialty}
                </CardDescription>
                <CardDescription className="text-sm text-gray-500">
                  {doctor.experience}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{doctor.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
