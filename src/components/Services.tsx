
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ShoppingCart, 
  Store, 
  Package, 
  TrendingUp, 
  Settings, 
  HeadphonesIcon,
  RefreshCw,
  FileText
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "Amazon FBA/FBM Management",
      description: "Complete Amazon store management including inventory, PPC, and optimization for maximum profitability.",
      features: ["Product Research", "PPC Management", "Inventory Planning"],
      gradient: "from-orange-400 to-orange-600"
    },
    {
      icon: Store,
      title: "Walmart Store Setup & Growth",
      description: "Professional Walmart marketplace setup and growth strategies to expand your reach.",
      features: ["Store Setup", "Product Listing", "Growth Strategy"],
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: Package,
      title: "Shopify Store Design & SEO",
      description: "Custom Shopify stores with conversion optimization and search engine visibility.",
      features: ["Custom Design", "SEO Optimization", "Conversion Focus"],
      gradient: "from-green-400 to-green-600"
    },
    {
      icon: TrendingUp,
      title: "eBay Dropshipping & Research",
      description: "Profitable eBay dropshipping setup with comprehensive product research and automation.",
      features: ["Product Research", "Automation", "Profit Optimization"],
      gradient: "from-purple-400 to-purple-600"
    },
    {
      icon: Settings,
      title: "TikTok Shop Onboarding",
      description: "Complete TikTok Shop setup and automation for the fastest growing social commerce platform.",
      features: ["Shop Setup", "Content Strategy", "Automation"],
      gradient: "from-pink-400 to-pink-600"
    },
    {
      icon: RefreshCw,
      title: "Multi-Platform Integration",
      description: "Seamless integration across all major platforms with centralized management systems.",
      features: ["Platform Sync", "Unified Dashboard", "Data Analytics"],
      gradient: "from-indigo-400 to-indigo-600"
    },
    {
      icon: FileText,
      title: "Product Listing Optimization",
      description: "Professional product listings with high-converting copy, images, and SEO optimization.",
      features: ["Copy Writing", "Image Optimization", "SEO Focus"],
      gradient: "from-teal-400 to-teal-600"
    },
    {
      icon: HeadphonesIcon,
      title: "Customer Service Management",
      description: "24/7 customer service handling to maintain excellent seller ratings and customer satisfaction.",
      features: ["24/7 Support", "Rating Management", "Issue Resolution"],
      gradient: "from-red-400 to-red-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block animate-fade-in">
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-inter font-medium mb-4">
              Our Expertise
            </div>
          </div>
          <h2 className="text-4xl font-inter font-bold text-gray-900 mb-4 animate-fade-in">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter animate-fade-in" style={{animationDelay: '0.2s'}}>
            Comprehensive eCommerce solutions designed to scale your business across all major marketplaces with corporate-level execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:-translate-y-2 animate-fade-in overflow-hidden relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-white transition-all duration-500 transform group-hover:scale-110">
                    <service.icon size={32} className="text-gray-600 group-hover:text-primary transition-colors duration-500" />
                  </div>
                  {/* Animated ring */}
                  <div className="absolute inset-0 w-16 h-16 mx-auto rounded-full border-2 border-primary opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-125 transition-all duration-700"></div>
                </div>
                <CardTitle className="text-lg font-inter font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300 leading-tight">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 relative z-10">
                <CardDescription className="text-gray-600 mb-4 font-inter leading-relaxed text-sm">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={feature} 
                      className="flex items-center text-sm text-gray-600 font-inter transform transition-all duration-300"
                      style={{
                        transitionDelay: `${featureIndex * 0.1}s`
                      }}
                    >
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0 transform group-hover:scale-125 transition-transform duration-300" />
                      <span className="group-hover:text-gray-800 transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-16 animate-fade-in" style={{animationDelay: '0.8s'}}>
          <div className="relative bg-gradient-to-r from-primary via-primary/90 to-primary rounded-2xl p-8 text-white overflow-hidden group hover:shadow-2xl transition-all duration-500">
            {/* Animated background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-inter font-bold mb-4 transform group-hover:scale-105 transition-transform duration-300">
                Ready to Scale Your eCommerce Business?
              </h3>
              <p className="text-lg mb-6 opacity-90 font-inter">
                Get a free consultation and discover how we can boost your marketplace performance.
              </p>
              <button className="bg-accent text-primary px-8 py-3 rounded-lg font-inter font-semibold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden group/btn">
                <span className="relative z-10">Get Free Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-white/20 to-accent/0 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>

            {/* Floating elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
