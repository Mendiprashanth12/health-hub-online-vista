
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Stats from '@/components/home/Stats';
import Testimonials from '@/components/home/Testimonials';
import Departments from '@/components/home/Departments';
import EmergencyContact from '@/components/home/EmergencyContact';
import NewsletterSignup from '@/components/home/NewsletterSignup';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Departments />
        <Testimonials />
        <EmergencyContact />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
