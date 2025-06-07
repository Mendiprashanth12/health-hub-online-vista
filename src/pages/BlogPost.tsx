
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const BlogPost = () => {
  const { id } = useParams();

  // Mock blog post data (in a real app, this would come from an API)
  const blogPost = {
    id: 1,
    title: "10 Heart-Healthy Foods to Include in Your Diet",
    content: `
      <p>Maintaining a heart-healthy diet is one of the most effective ways to reduce your risk of cardiovascular disease. In this comprehensive guide, we'll explore ten essential foods that can help keep your heart strong and healthy.</p>
      
      <h2>1. Fatty Fish</h2>
      <p>Salmon, mackerel, sardines, and other fatty fish are rich in omega-3 fatty acids, which help reduce inflammation and lower the risk of heart disease. Aim to eat fish at least twice a week.</p>
      
      <h2>2. Leafy Green Vegetables</h2>
      <p>Spinach, kale, and other leafy greens are packed with vitamins, minerals, and antioxidants. They're particularly high in vitamin K, which helps protect your arteries and promote proper blood clotting.</p>
      
      <h2>3. Whole Grains</h2>
      <p>Whole grains like oats, quinoa, and brown rice contain fiber that can help reduce cholesterol levels and lower blood pressure.</p>
      
      <h2>4. Berries</h2>
      <p>Blueberries, strawberries, and other berries are loaded with antioxidants called anthocyanins, which may help reduce blood pressure and improve heart health.</p>
      
      <h2>5. Avocados</h2>
      <p>Rich in monounsaturated fats, avocados can help reduce bad cholesterol levels and lower the risk of heart disease.</p>
    `,
    author: "Dr. Sarah Wilson",
    date: "March 15, 2024",
    category: "Cardiology",
    readTime: "5 min read"
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Breadcrumb */}
        <section className="py-4 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-primary hover:underline">Home</Link>
              <span>/</span>
              <Link to="/blog" className="text-primary hover:underline">Blog</Link>
              <span>/</span>
              <span className="text-gray-600">{blogPost.title}</span>
            </div>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-primary text-white text-sm rounded-full">
                    {blogPost.category}
                  </span>
                  <span className="text-gray-500 text-sm">{blogPost.readTime}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {blogPost.title}
                </h1>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-gray-900">{blogPost.author}</div>
                      <div className="text-gray-500 text-sm">{blogPost.date}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="aspect-video bg-gray-200 rounded-lg mb-8"></div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
              </div>

              {/* Call to Action */}
              <Card className="mt-12 bg-primary text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Need Medical Advice?</h3>
                  <p className="mb-6 text-blue-100">
                    Consult with our experienced cardiologists for personalized heart health guidance
                  </p>
                  <Link to="/contact">
                    <Button variant="secondary" size="lg">
                      Book Appointment
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
