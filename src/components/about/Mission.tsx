
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Mission = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-600">
              Committed to providing exceptional healthcare with compassion and excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  To provide comprehensive, compassionate healthcare services that improve 
                  the health and well-being of our community through excellence in patient care, 
                  medical education, and research.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  To be the leading healthcare provider in our region, recognized for 
                  clinical excellence, innovative treatments, and exceptional patient experience.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Compassion, Integrity, Excellence, Innovation, Teamwork, and Respect 
                  guide everything we do in serving our patients and community.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
