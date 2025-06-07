
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Bell, Clock } from 'lucide-react';

const EmergencyContact = () => {
  return (
    <section className="py-16 bg-red-50">
      <div className="container mx-auto px-4">
        <Card className="bg-red-600 text-white">
          <CardContent className="p-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-4">
                <Bell className="h-8 w-8" />
                <div>
                  <h3 className="text-2xl font-bold">Emergency Care Available</h3>
                  <p className="text-red-100">24/7 Emergency services - Call now for immediate assistance</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-2xl font-bold">911</div>
                  <div className="text-sm text-red-100 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Available 24/7
                  </div>
                </div>
                <Button variant="secondary" size="lg">
                  Call Emergency
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EmergencyContact;
