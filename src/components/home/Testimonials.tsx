
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient",
      content: "The care I received was exceptional. The staff was professional, caring, and made me feel comfortable throughout my treatment.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Patient",
      content: "Outstanding medical facility with state-of-the-art equipment. The doctors took time to explain everything clearly.",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "Patient",
      content: "From emergency care to follow-up, every step was handled with professionalism and genuine care for my well-being.",
      rating: 5
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600">
            Real experiences from our valued patients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
