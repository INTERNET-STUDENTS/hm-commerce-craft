
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "E-commerce Entrepreneur",
      content: "Hannan Marketplace transformed our Amazon business completely. Revenue increased by 300% in just 6 months with their professional management.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Multi-Platform Seller",
      content: "The team's expertise across all platforms is incredible. They set up our Walmart and eBay stores while optimizing our existing Amazon presence.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Shopify Store Owner",
      content: "Professional, reliable, and results-driven. Their Shopify optimization and customer service management saved us countless hours.",
      rating: 5,
      avatar: "ER"
    },
    {
      name: "David Kim",
      role: "TikTok Shop Pioneer",
      content: "Got us set up on TikTok Shop before our competitors even knew it existed. The early mover advantage was worth millions in sales.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Thompson",
      role: "Amazon FBA Seller",
      content: "Their PPC management and inventory planning is top-notch. We've never had stockouts since working with HM, and our ACOS improved by 40%.",
      rating: 5,
      avatar: "LT"
    },
    {
      name: "James Wilson",
      role: "Multi-Channel Retailer",
      content: "The multi-platform integration dashboard is a game-changer. Managing 5 different marketplaces has never been this streamlined and efficient.",
      rating: 5,
      avatar: "JW"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-inter font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Don't just take our word for it. Here's what successful entrepreneurs and business owners say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="group hover:shadow-xl transition-all duration-300 border-gray-100 hover:border-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Rating Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-accent fill-current" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-gray-700 font-inter leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-inter font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-inter font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 font-inter">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-inter font-bold text-gray-900 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-lg text-gray-600 mb-6 font-inter">
              Schedule a free consultation and see how we can transform your eCommerce business.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-inter font-semibold hover:bg-primary/90 transition-colors duration-200">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
