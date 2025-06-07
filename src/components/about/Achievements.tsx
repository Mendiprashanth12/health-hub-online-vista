
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Achievements = () => {
  const achievements = [
    {
      title: "Joint Commission Accreditation",
      description: "Awarded for meeting the highest standards of healthcare quality and safety."
    },
    {
      title: "Top 100 Hospitals",
      description: "Recognized nationally for clinical excellence and patient outcomes."
    },
    {
      title: "Magnet Recognition",
      description: "Honored for nursing excellence and quality patient care."
    },
    {
      title: "Patient Safety Excellence",
      description: "Achieved top ratings for patient safety measures and protocols."
    },
    {
      title: "Technology Innovation Award",
      description: "Leading adoption of cutting-edge medical technology and digital health solutions."
    },
    {
      title: "Community Service Award",
      description: "Recognized for outstanding community health programs and outreach initiatives."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Awards & Recognition
          </h2>
          <p className="text-lg text-gray-600">
            Our commitment to excellence has been recognized by leading healthcare organizations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-primary">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{achievement.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
