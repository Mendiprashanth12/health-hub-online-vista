
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Heart-Healthy Foods to Include in Your Diet",
      excerpt: "Discover the best foods for cardiovascular health and learn how to incorporate them into your daily meals.",
      author: "Dr. Sarah Wilson",
      date: "March 15, 2024",
      category: "Cardiology",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Understanding Mental Health: Breaking the Stigma",
      excerpt: "Mental health is just as important as physical health. Learn about common conditions and treatment options.",
      author: "Dr. Michael Chen",
      date: "March 12, 2024",
      category: "Mental Health",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "The Importance of Regular Health Checkups",
      excerpt: "Prevention is better than cure. Find out why regular health screenings are crucial for early detection.",
      author: "Dr. Emily Rodriguez",
      date: "March 10, 2024",
      category: "Preventive Care",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Managing Diabetes: A Comprehensive Guide",
      excerpt: "Learn effective strategies for managing diabetes and maintaining a healthy lifestyle.",
      author: "Dr. James Thompson",
      date: "March 8, 2024",
      category: "Endocrinology",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Exercise and Your Health: Finding the Right Routine",
      excerpt: "Discover how to create an exercise routine that fits your lifestyle and health goals.",
      author: "Dr. Lisa Park",
      date: "March 5, 2024",
      category: "Fitness",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Cancer Prevention: Lifestyle Changes That Matter",
      excerpt: "Simple lifestyle modifications that can significantly reduce your cancer risk.",
      author: "Dr. David Kumar",
      date: "March 3, 2024",
      category: "Oncology",
      image: "/placeholder.svg"
    }
  ];

  const categories = ["All", "Cardiology", "Mental Health", "Preventive Care", "Endocrinology", "Fitness", "Oncology"];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="medical-gradient text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Health Blog</h1>
              <p className="text-xl text-blue-100">
                Stay informed with the latest health tips, medical insights, and wellness advice from our expert team
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-primary hover:text-white transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video bg-gray-200 rounded-t-lg"></div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm text-primary font-medium">{post.category}</span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <CardTitle className="text-xl hover:text-primary transition-colors">
                      <Link to={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">By {post.author}</span>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-primary hover:underline text-sm font-medium"
                      >
                        Read More
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
