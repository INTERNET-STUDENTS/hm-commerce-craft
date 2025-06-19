
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
      features: ["Product Research", "PPC Management", "Inventory Planning"]
    },
    {
      icon: Store,
      title: "Walmart Store Setup & Growth",
      description: "Professional Walmart marketplace setup and growth strategies to expand your reach.",
      features: ["Store Setup", "Product Listing", "Growth Strategy"]
    },
    {
      icon: Package,
      title: "Shopify Store Design & SEO",
      description: "Custom Shopify stores with conversion optimization and search engine visibility.",
      features: ["Custom Design", "SEO Optimization", "Conversion Focus"]
    },
    {
      icon: TrendingUp,
      title: "eBay Dropshipping & Research",
      description: "Profitable eBay dropshipping setup with comprehensive product research and automation.",
      features: ["Product Research", "Automation", "Profit Optimization"]
    },
    {
      icon: Settings,
      title: "TikTok Shop Onboarding",
      description: "Complete TikTok Shop setup and automation for the fastest growing social commerce platform.",
      features: ["Shop Setup", "Content Strategy", "Automation"]
    },
    {
      icon: RefreshCw,
      title: "Multi-Platform Integration",
      description: "Seamless integration across all major platforms with centralized management systems.",
      features: ["Platform Sync", "Unified Dashboard", "Data Analytics"]
    },
    {
      icon: FileText,
      title: "Product Listing Optimization",
      description: "Professional product listings with high-converting copy, images, and SEO optimization.",
      features: ["Copy Writing", "Image Optimization", "SEO Focus"]
    },
    {
      icon: HeadphonesIcon,
      title: "Customer Service Management",
      description: "24/7 customer service handling to maintain excellent seller ratings and customer satisfaction.",
      features: ["24/7 Support", "Rating Management", "Issue Resolution"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-inter font-bold text-gray-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Comprehensive eCommerce solutions designed to scale your business across all major marketplaces with corporate-level execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group hover:shadow-xl transition-all duration-300 border-gray-100 hover:border-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <service.icon size={32} className="text-primary group-hover:text-white" />
                </div>
                <CardTitle className="text-lg font-inter font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-gray-600 mb-4 font-inter leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600 font-inter">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-inter font-bold mb-4">
              Ready to Scale Your eCommerce Business?
            </h3>
            <p className="text-lg mb-6 opacity-90 font-inter">
              Get a free consultation and discover how we can boost your marketplace performance.
            </p>
            <button className="bg-accent text-primary px-8 py-3 rounded-lg font-inter font-semibold hover:bg-accent/90 transition-colors duration-200">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
