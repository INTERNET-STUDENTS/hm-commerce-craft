
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, TrendingUp, Users, Award } from 'lucide-react';

const Hero = () => {
  const [currentStat, setCurrentStat] = useState(0);
  
  const platformLogos = [
    { name: 'Amazon', icon: '🛒', color: 'from-orange-400 to-orange-600' },
    { name: 'Walmart', icon: '🏪', color: 'from-blue-400 to-blue-600' },
    { name: 'Shopify', icon: '🛍️', color: 'from-green-400 to-green-600' },
    { name: 'eBay', icon: '📦', color: 'from-purple-400 to-purple-600' },
    { name: 'TikTok Shop', icon: '🎵', color: 'from-pink-400 to-pink-600' },
  ];

  const stats = [
    { icon: TrendingUp, label: 'Revenue Growth', value: '+247%' },
    { icon: Users, label: 'Active Clients', value: '500+' },
    { icon: Award, label: 'Success Rate', value: '98%' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary/5 to-transparent rounded-full animate-float"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-3/4 h-3/4 bg-gradient-to-tr from-accent/10 to-transparent rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-[80vh] gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="space-y-8">
              {/* Animated badge */}
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 animate-fade-in">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-inter text-gray-600">Trusted by 500+ businesses</span>
              </div>

              {/* Main headline with typing effect */}
              <h1 className="text-4xl lg:text-6xl font-inter font-bold text-gray-900 leading-tight animate-fade-in">
                Grow Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 animate-pulse">
                  eCommerce Empire
                </span>{' '}
                with Hannan Marketplace
              </h1>
              
              <p className="text-xl text-gray-600 font-inter leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
                Professional marketplace management services for Amazon, Walmart, Shopify, eBay, and TikTok Shop. 
                Scale your business with our proven expertise and corporate-level execution.
              </p>

              {/* Enhanced CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{animationDelay: '0.6s'}}>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white font-inter font-semibold px-8 py-4 h-auto group relative overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center">
                    Get Started Today
                    <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary text-primary hover:bg-primary hover:text-white font-inter font-semibold px-8 py-4 h-auto group transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  <Play className="mr-2 transition-transform duration-300 group-hover:scale-110" size={20} />
                  Watch Demo
                </Button>
              </div>

              {/* Animated platform badges */}
              <div className="animate-fade-in" style={{animationDelay: '0.9s'}}>
                <p className="text-sm text-gray-500 mb-4 font-inter">Trusted by sellers on:</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  {platformLogos.map((platform, index) => (
                    <div
                      key={platform.name}
                      className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 group cursor-pointer"
                      style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{platform.icon}</span>
                      <span className="text-sm font-inter font-medium text-gray-700">
                        {platform.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Dashboard */}
          <div className="lg:w-1/2">
            <div className="relative animate-scale-in" style={{animationDelay: '0.5s'}}>
              {/* Main dashboard card */}
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500">
                <div className="bg-white/95 backdrop-blur rounded-xl p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center animate-pulse">
                      <span className="text-primary font-bold">HM</span>
                    </div>
                    <div>
                      <h3 className="font-inter font-semibold text-gray-900">Dashboard Overview</h3>
                      <p className="text-sm text-gray-500">Multi-Platform Analytics</p>
                    </div>
                  </div>
                  
                  {/* Animated stats grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg transform hover:scale-105 transition-all duration-300 group">
                      <div className="text-2xl font-bold text-green-600 group-hover:text-green-700">+247%</div>
                      <div className="text-sm text-gray-600">Revenue Growth</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg transform hover:scale-105 transition-all duration-300 group">
                      <div className="text-2xl font-bold text-blue-600 group-hover:text-blue-700">5.2K</div>
                      <div className="text-sm text-gray-600">Orders/Month</div>
                    </div>
                  </div>

                  {/* Animated progress bars */}
                  <div className="space-y-3">
                    {['Amazon Sales', 'Walmart Growth', 'Shopify Traffic'].map((metric, index) => {
                      const percentage = 85 - index * 10;
                      return (
                        <div key={metric} className="flex items-center justify-between group">
                          <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{metric}</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full transition-all duration-1000 ease-out"
                                style={{ 
                                  width: `${percentage}%`,
                                  animationDelay: `${index * 0.2}s`
                                }}
                              />
                            </div>
                            <span className="text-sm font-semibold text-primary">{percentage}%</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              
              {/* Floating stat cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg animate-float">
                <div className="flex items-center space-x-2">
                  {React.createElement(stats[currentStat].icon, { size: 20, className: "text-primary" })}
                  <div>
                    <div className="text-lg font-bold text-primary">{stats[currentStat].value}</div>
                    <div className="text-xs text-gray-600">{stats[currentStat].label}</div>
                  </div>
                </div>
              </div>

              {/* Decorative floating elements */}
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-accent/30 to-accent/10 rounded-full opacity-70 animate-float"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
