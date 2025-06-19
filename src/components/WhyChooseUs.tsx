
import { Shield, Rocket, Timer, TrendingUp, Briefcase } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Secure & Trustworthy",
      description: "Your business data and accounts are protected with enterprise-level security protocols.",
      color: "bg-green-100 text-green-600",
      gradient: "from-green-400 to-green-600"
    },
    {
      icon: Rocket,
      title: "Proven Track Record",
      description: "Over 500+ successful stores launched with an average 200%+ revenue increase.",
      color: "bg-blue-100 text-blue-600",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: Timer,
      title: "Fast Support Response",
      description: "24/7 dedicated support with average response time under 2 hours for all queries.",
      color: "bg-purple-100 text-purple-600",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "From startup to enterprise, our solutions grow with your business needs seamlessly.",
      color: "bg-orange-100 text-orange-600",
      gradient: "from-orange-400 to-orange-600"
    },
    {
      icon: Briefcase,
      title: "Corporate-Level Execution",
      description: "Professional processes and systems that meet enterprise standards and compliance.",
      color: "bg-indigo-100 text-indigo-600",
      gradient: "from-indigo-400 to-indigo-600"
    }
  ];

  const stats = [
    { number: "500+", label: "Stores Launched", icon: "🏪" },
    { number: "200%", label: "Avg Revenue Growth", icon: "📈" },
    { number: "24/7", label: "Support Available", icon: "🔧" },
    { number: "5+", label: "Years Experience", icon: "🏆" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block animate-fade-in">
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-inter font-medium mb-4">
              Why Choose Us
            </div>
          </div>
          <h2 className="text-4xl font-inter font-bold text-gray-900 mb-4 animate-fade-in">
            Why Choose Hannan Marketplace?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter animate-fade-in" style={{animationDelay: '0.2s'}}>
            We combine industry expertise with cutting-edge technology to deliver results that matter to your bottom line.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div 
              key={reason.title}
              className="group bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in border border-gray-100 hover:border-primary/20 hover:-translate-y-2 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="relative mb-6">
                  <div className={`w-16 h-16 ${reason.color} rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-500`}>
                    <reason.icon size={32} />
                  </div>
                  {/* Animated pulse ring */}
                  <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-current opacity-0 group-hover:opacity-30 scale-100 group-hover:scale-150 transition-all duration-700"></div>
                </div>
                
                <h3 className="text-xl font-inter font-semibold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-gray-600 font-inter leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {reason.description}
                </p>
              </div>

              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="relative inline-block mb-4">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="text-4xl font-inter font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-gray-600 font-inter group-hover:text-gray-800 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Additional floating elements */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-accent rounded-full animate-ping opacity-75"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-primary rounded-full animate-ping opacity-50" style={{animationDelay: '1s'}}></div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
