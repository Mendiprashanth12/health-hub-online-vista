
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Calendar, FileText, Bell, Activity, Clock } from 'lucide-react';

const Dashboard = () => {
  const [user] = useState({
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    dateOfBirth: "1985-06-15",
    bloodType: "O+",
    allergies: "Penicillin",
    emergencyContact: "Jane Doe - +1 (555) 987-6543"
  });

  const appointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Wilson",
      specialty: "Cardiology",
      date: "2024-03-20",
      time: "10:00 AM",
      status: "Confirmed"
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      specialty: "Neurology",
      date: "2024-03-25",
      time: "2:30 PM",
      status: "Pending"
    }
  ];

  const medicalRecords = [
    {
      id: 1,
      type: "Blood Test",
      date: "2024-03-10",
      doctor: "Dr. Emily Rodriguez",
      status: "Completed"
    },
    {
      id: 2,
      type: "X-Ray",
      date: "2024-03-05",
      doctor: "Dr. James Thompson",
      status: "Completed"
    },
    {
      id: 3,
      type: "MRI Scan",
      date: "2024-02-28",
      doctor: "Dr. Lisa Park",
      status: "Completed"
    }
  ];

  const notifications = [
    {
      id: 1,
      message: "Appointment reminder: Dr. Sarah Wilson tomorrow at 10:00 AM",
      time: "2 hours ago"
    },
    {
      id: 2,
      message: "Lab results are ready for review",
      time: "1 day ago"
    },
    {
      id: 3,
      message: "Annual checkup is due next month",
      time: "3 days ago"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="medical-gradient text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">My Dashboard</h1>
              <p className="text-xl text-blue-100">Welcome back, {user.name}</p>
            </div>
          </div>
        </section>

        {/* Dashboard Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="appointments">Appointments</TabsTrigger>
                <TabsTrigger value="records">Records</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Upcoming Appointments</CardTitle>
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">2</div>
                      <p className="text-xs text-muted-foreground">Next: Tomorrow 10:00 AM</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Medical Records</CardTitle>
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">12</div>
                      <p className="text-xs text-muted-foreground">Total records</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Last Visit</CardTitle>
                      <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">5</div>
                      <p className="text-xs text-muted-foreground">Days ago</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Health Score</CardTitle>
                      <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">95%</div>
                      <p className="text-xs text-muted-foreground">Excellent</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Appointments</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {appointments.slice(0, 3).map((appointment) => (
                          <div key={appointment.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <div>
                              <p className="font-medium">{appointment.doctor}</p>
                              <p className="text-sm text-gray-600">{appointment.specialty}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm">{appointment.date}</p>
                              <p className="text-sm text-gray-600">{appointment.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Notifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {notifications.slice(0, 3).map((notification) => (
                          <div key={notification.id} className="p-3 bg-gray-50 rounded-lg">
                            <p className="text-sm">{notification.message}</p>
                            <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="appointments" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">My Appointments</h2>
                  <Button>Book New Appointment</Button>
                </div>
                <div className="grid gap-4">
                  {appointments.map((appointment) => (
                    <Card key={appointment.id}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-semibold">{appointment.doctor}</h3>
                            <p className="text-gray-600">{appointment.specialty}</p>
                            <p className="text-sm text-gray-500 mt-2">
                              {appointment.date} at {appointment.time}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              appointment.status === 'Confirmed' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {appointment.status}
                            </span>
                            <Button variant="outline" size="sm">Reschedule</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="records" className="space-y-6">
                <h2 className="text-2xl font-bold">Medical Records</h2>
                <div className="grid gap-4">
                  {medicalRecords.map((record) => (
                    <Card key={record.id}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="text-lg font-semibold">{record.type}</h3>
                            <p className="text-gray-600">Dr. {record.doctor}</p>
                            <p className="text-sm text-gray-500">{record.date}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                              {record.status}
                            </span>
                            <Button variant="outline" size="sm">View</Button>
                            <Button variant="outline" size="sm">Download</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="profile" className="space-y-6">
                <h2 className="text-2xl font-bold">Profile Information</h2>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="h-5 w-5 mr-2" />
                      Personal Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700">Full Name</label>
                        <p className="text-gray-900">{user.name}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Email</label>
                        <p className="text-gray-900">{user.email}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Phone</label>
                        <p className="text-gray-900">{user.phone}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Date of Birth</label>
                        <p className="text-gray-900">{user.dateOfBirth}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Blood Type</label>
                        <p className="text-gray-900">{user.bloodType}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Allergies</label>
                        <p className="text-gray-900">{user.allergies}</p>
                      </div>
                      <div className="md:col-span-2">
                        <label className="text-sm font-medium text-gray-700">Emergency Contact</label>
                        <p className="text-gray-900">{user.emergencyContact}</p>
                      </div>
                    </div>
                    <Button>Edit Profile</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="space-y-6">
                <h2 className="text-2xl font-bold">Notifications</h2>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <Card key={notification.id}>
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <Bell className="h-5 w-5 text-primary mt-0.5" />
                          <div className="flex-1">
                            <p className="text-gray-900">{notification.message}</p>
                            <p className="text-sm text-gray-500 mt-1">{notification.time}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
