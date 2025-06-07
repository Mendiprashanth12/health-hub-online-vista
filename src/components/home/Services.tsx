
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Hospital, Activity, Users, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Hospital,
      title: "Emergency Care",
      description: "24/7 emergency medical services with state-of-the-art equipment and experienced staff."
    },
    {
      icon: Activity,
      title: "Cardiology",
      description: "Comprehensive heart care including diagnostics, treatment, and preventive services."
    },
    {
      icon: Users,
      title: "Family Medicine",
      description: "Complete healthcare for all family members from infants to seniors."
    },
    {
      icon: Clock,
      title: "Urgent Care",
      description: "Quick treatment for non-life-threatening conditions without appointment."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Medical Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive healthcare services with the latest medical technology 
            and a team of experienced professionals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
