
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "E-commerce Entrepreneur",
      content: "Hannan Marketplace transformed our Amazon business completely. Revenue increased by 300% in just 6 months with their professional management.",
      rating: 5,
      avatar: "SJ",
      company: "Johnson & Co",
      result: "+300% Revenue"
    },
    {
      name: "Michael Chen",
      role: "Multi-Platform Seller",
      content: "The team's expertise across all platforms is incredible. They set up our Walmart and eBay stores while optimizing our existing Amazon presence.",
      rating: 5,
      avatar: "MC",
      company: "Chen Enterprises",
      result: "5 Platforms"
    },
    {
      name: "Emily Rodriguez",
      role: "Shopify Store Owner",
      content: "Professional, reliable, and results-driven. Their Shopify optimization and customer service management saved us countless hours.",
      rating: 5,
      avatar: "ER",
      company: "Rodriguez Retail",
      result: "40% Time Saved"
    },
    {
      name: "David Kim",
      role: "TikTok Shop Pioneer",
      content: "Got us set up on TikTok Shop before our competitors even knew it existed. The early mover advantage was worth millions in sales.",
      rating: 5,
      avatar: "DK",
      company: "Kim Digital",
      result: "$2M+ Sales"
    },
    {
      name: "Lisa Thompson",
      role: "Amazon FBA Seller",
      content: "Their PPC management and inventory planning is top-notch. We've never had stockouts since working with HM, and our ACOS improved by 40%.",
      rating: 5,
      avatar: "LT",
      company: "Thompson Trade",
      result: "40% ACOS Improvement"
    },
    {
      name: "James Wilson",
      role: "Multi-Channel Retailer",
      content: "The multi-platform integration dashboard is a game-changer. Managing 5 different marketplaces has never been this streamlined and efficient.",
      rating: 5,
      avatar: "JW",
      company: "Wilson Worldwide",
      result: "5 Channels Managed"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block animate-fade-in">
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-inter font-medium mb-4">
              Client Success Stories
            </div>
          </div>
          <h2 className="text-4xl font-inter font-bold text-gray-900 mb-4 animate-fade-in">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter animate-fade-in" style={{animationDelay: '0.2s'}}>
            Don't just take our word for it. Here's what successful entrepreneurs and business owners say about our services.
          </p>
        </div>

        {/* Featured Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <div 
            className="relative bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 md:p-12 text-white overflow-hidden group"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-3000"></div>
            
            <div className="relative z-10">
              {/* Quote icon */}
              <Quote size={48} className="text-accent mb-6 opacity-80" />
              
              {/* Testimonial content */}
              <div className="transition-all duration-500 ease-in-out">
                <p className="text-xl md:text-2xl font-inter leading-relaxed mb-8 italic">
                  "{testimonials[currentTestimonial].content}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-accent text-primary rounded-full flex items-center justify-center font-inter font-bold text-lg">
                      {testimonials[currentTestimonial].avatar}
                    </div>
                    <div>
                      <div className="font-inter font-semibold text-lg">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-sm opacity-90">
                        {testimonials[currentTestimonial].role}
                      </div>
                      <div className="text-xs opacity-75">
                        {testimonials[currentTestimonial].company}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-accent font-bold text-lg">
                      {testimonials[currentTestimonial].result}
                    </div>
                    <div className="flex space-x-1 justify-end mt-2">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-accent fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={20} />
            </button>

            {/* Progress indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentTestimonial(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-accent w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Grid of testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className={`group hover:shadow-xl transition-all duration-500 border-gray-100 hover:border-primary/20 animate-fade-in cursor-pointer ${
                index === currentTestimonial ? 'ring-2 ring-primary/20 shadow-lg' : ''
              }`}
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              onClick={() => {
                setCurrentTestimonial(index);
                setIsAutoPlaying(false);
              }}
            >
              <CardContent className="p-6 relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Rating Stars */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-accent fill-current transform group-hover:scale-110 transition-transform duration-300" style={{transitionDelay: `${i * 0.1}s`}} />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-gray-700 font-inter leading-relaxed mb-6 italic text-sm group-hover:text-gray-800 transition-colors duration-300">
                    "{testimonial.content}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-inter font-semibold text-sm group-hover:bg-primary/80 transition-colors duration-300">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-inter font-semibold text-gray-900 text-sm group-hover:text-primary transition-colors duration-300">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-gray-600 font-inter">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center animate-fade-in" style={{animationDelay: '1.2s'}}>
          <div className="relative bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 overflow-hidden group">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-inter font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-lg text-gray-600 mb-6 font-inter group-hover:text-gray-700 transition-colors duration-300">
                Schedule a free consultation and see how we can transform your eCommerce business.
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-inter font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden group/btn">
                <span className="relative z-10">Schedule Free Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
