
import { Shield, Rocket, Timer, TrendingUp, Briefcase } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Secure & Trustworthy",
      description: "Your business data and accounts are protected with enterprise-level security protocols.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Rocket,
      title: "Proven Track Record",
      description: "Over 500+ successful stores launched with an average 200%+ revenue increase.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Timer,
      title: "Fast Support Response",
      description: "24/7 dedicated support with average response time under 2 hours for all queries.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "From startup to enterprise, our solutions grow with your business needs seamlessly.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Briefcase,
      title: "Corporate-Level Execution",
      description: "Professional processes and systems that meet enterprise standards and compliance.",
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-inter font-bold text-gray-900 mb-4">
            Why Choose Hannan Marketplace?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            We combine industry expertise with cutting-edge technology to deliver results that matter to your bottom line.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={reason.title}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in border border-gray-100 hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 ${reason.color} rounded-full flex items-center justify-center mb-6`}>
                <reason.icon size={32} />
              </div>
              
              <h3 className="text-xl font-inter font-semibold text-gray-900 mb-4">
                {reason.title}
              </h3>
              
              <p className="text-gray-600 font-inter leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-inter font-bold text-primary mb-2">500+</div>
            <div className="text-gray-600 font-inter">Stores Launched</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-inter font-bold text-primary mb-2">200%</div>
            <div className="text-gray-600 font-inter">Avg Revenue Growth</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-inter font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-600 font-inter">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-inter font-bold text-primary mb-2">5+</div>
            <div className="text-gray-600 font-inter">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
