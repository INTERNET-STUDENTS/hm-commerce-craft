
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const platformLogos = [
    { name: 'Amazon', icon: '🛒' },
    { name: 'Walmart', icon: '🏪' },
    { name: 'Shopify', icon: '🛍️' },
    { name: 'eBay', icon: '📦' },
    { name: 'TikTok Shop', icon: '🎵' },
  ];

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center min-h-[600px]">
          {/* Left Content */}
          <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-inter font-bold text-gray-900 leading-tight mb-6">
                Grow Your{' '}
                <span className="text-primary">eCommerce Empire</span>{' '}
                with Hannan Marketplace
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 font-inter leading-relaxed">
                Professional marketplace management services for Amazon, Walmart, Shopify, eBay, and TikTok Shop. 
                Scale your business with our proven expertise and corporate-level execution.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white font-inter font-semibold px-8 py-4 h-auto"
                >
                  Get Started Today
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary text-primary hover:bg-primary hover:text-white font-inter font-semibold px-8 py-4 h-auto"
                >
                  <Play className="mr-2" size={20} />
                  Watch Demo
                </Button>
              </div>

              {/* Platform Badges */}
              <div>
                <p className="text-sm text-gray-500 mb-4 font-inter">Trusted by sellers on:</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  {platformLogos.map((platform) => (
                    <div
                      key={platform.name}
                      className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
                    >
                      <span className="text-2xl">{platform.icon}</span>
                      <span className="text-sm font-inter font-medium text-gray-700">
                        {platform.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative animate-scale-in">
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">HM</span>
                    </div>
                    <div>
                      <h3 className="font-inter font-semibold text-gray-900">Dashboard Overview</h3>
                      <p className="text-sm text-gray-500">Multi-Platform Analytics</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">+247%</div>
                      <div className="text-sm text-gray-600">Revenue Growth</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">5.2K</div>
                      <div className="text-sm text-gray-600">Orders/Month</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {['Amazon Sales', 'Walmart Growth', 'Shopify Traffic'].map((metric, index) => (
                      <div key={metric} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{metric}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 h-2 bg-gray-200 rounded-full">
                            <div 
                              className="h-full bg-primary rounded-full"
                              style={{ width: `${85 - index * 10}%` }}
                            />
                          </div>
                          <span className="text-sm font-semibold">{85 - index * 10}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-20 animate-float" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
