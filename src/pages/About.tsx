
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Mission from '@/components/about/Mission';
import Team from '@/components/about/Team';
import History from '@/components/about/History';
import Achievements from '@/components/about/Achievements';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="medical-gradient text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About MediCare Plus</h1>
              <p className="text-xl text-blue-100">
                Dedicated to providing exceptional healthcare services to our community 
                for nearly five decades
              </p>
            </div>
          </div>
        </section>

        <Mission />
        <Team />
        <History />
        <Achievements />
      </main>
      <Footer />
    </div>
  );
};

export default About;
