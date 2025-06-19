
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MessageSquare, MapPin, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    platform: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block animate-fade-in">
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-inter font-medium mb-4">
              Get In Touch
            </div>
          </div>
          <h2 className="text-4xl font-inter font-bold text-gray-900 mb-4 animate-fade-in">
            Let's Grow Your Business Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter animate-fade-in" style={{animationDelay: '0.2s'}}>
            Ready to take your eCommerce business to the next level? Get in touch with our experts for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Form */}
          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm animate-fade-in overflow-hidden group" style={{animationDelay: '0.4s'}}>
            {/* Gradient header */}
            <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary"></div>
            
            <CardHeader className="relative">
              <CardTitle className="text-2xl font-inter font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                Get Your Free Consultation
              </CardTitle>
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="group">
                      <label className="block text-sm font-inter font-medium text-gray-700 mb-2 group-focus-within:text-primary transition-colors duration-300">
                        First Name
                      </label>
                      <Input 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John" 
                        className="font-inter transition-all duration-300 focus:scale-105 focus:shadow-lg"
                        required
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-inter font-medium text-gray-700 mb-2 group-focus-within:text-primary transition-colors duration-300">
                        Last Name
                      </label>
                      <Input 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe" 
                        className="font-inter transition-all duration-300 focus:scale-105 focus:shadow-lg"
                        required
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-inter font-medium text-gray-700 mb-2 group-focus-within:text-primary transition-colors duration-300">
                      Email Address
                    </label>
                    <Input 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com" 
                      className="font-inter transition-all duration-300 focus:scale-105 focus:shadow-lg"
                      required
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-inter font-medium text-gray-700 mb-2 group-focus-within:text-primary transition-colors duration-300">
                      Phone Number
                    </label>
                    <Input 
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567" 
                      className="font-inter transition-all duration-300 focus:scale-105 focus:shadow-lg"
                      required
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-inter font-medium text-gray-700 mb-2 group-focus-within:text-primary transition-colors duration-300">
                      Current Platforms
                    </label>
                    <select 
                      name="platform"
                      value={formData.platform}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md font-inter transition-all duration-300 focus:scale-105 focus:shadow-lg focus:border-primary"
                      required
                    >
                      <option value="">Select your current platforms</option>
                      <option value="amazon">Amazon only</option>
                      <option value="amazon-others">Amazon + Others</option>
                      <option value="multiple">Multiple platforms</option>
                      <option value="starting">Just starting out</option>
                    </select>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-inter font-medium text-gray-700 mb-2 group-focus-within:text-primary transition-colors duration-300">
                      Tell us about your business goals
                    </label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your current challenges and what you'd like to achieve..."
                      className="font-inter h-32 transition-all duration-300 focus:scale-105 focus:shadow-lg"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-inter font-semibold py-3 h-auto relative overflow-hidden group/btn transform hover:scale-105 transition-all duration-300 disabled:opacity-50"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                          Processing...
                        </>
                      ) : (
                        'Schedule My Free Consultation'
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8 animate-fade-in">
                  <CheckCircle size={64} className="mx-auto text-green-500 mb-4 animate-pulse" />
                  <h3 className="text-2xl font-inter font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600 font-inter">We'll be in touch within 2 hours during business hours.</p>
                </div>
              )}

              {!isSubmitted && (
                <p className="text-sm text-gray-500 text-center font-inter animate-fade-in">
                  We'll respond within 2 hours during business hours
                </p>
              )}
            </CardContent>
          </Card>

          {/* Enhanced Contact Information */}
          <div className="space-y-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
            {/* Contact Cards */}
            <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <CardContent className="p-6 relative">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300 transform group-hover:scale-110">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Phone</h3>
                    <p className="text-gray-600 font-inter">+1 (555) 123-4567</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 font-inter flex items-center">
                  <Clock size={14} className="mr-2" />
                  Available Monday-Friday, 9 AM - 6 PM EST
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300 transform group-hover:scale-110">
                    <Mail className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">Email</h3>
                    <p className="text-gray-600 font-inter">info@hannanmarketplace.com</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 font-inter">
                  We'll respond within 2 hours
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300 transform group-hover:scale-110">
                    <MessageSquare className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">Live Chat</h3>
                    <p className="text-gray-600 font-inter">Chat with our experts</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-inter font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Start Live Chat
                </Button>
              </CardContent>
            </Card>

            {/* Enhanced Quick Stats */}
            <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-xl p-6 text-white relative overflow-hidden group">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative z-10">
                <h3 className="font-inter font-bold text-xl mb-4 flex items-center">
                  <Award className="mr-2" size={24} />
                  Why Choose Us?
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center group/item">
                    <span className="font-inter group-hover/item:text-accent transition-colors duration-300">Response Time</span>
                    <span className="font-inter font-semibold">&lt; 2 Hours</span>
                  </div>
                  <div className="flex justify-between items-center group/item">
                    <span className="font-inter group-hover/item:text-accent transition-colors duration-300">Success Rate</span>
                    <span className="font-inter font-semibold">98%</span>
                  </div>
                  <div className="flex justify-between items-center group/item">
                    <span className="font-inter group-hover/item:text-accent transition-colors duration-300">Avg Revenue Growth</span>
                    <span className="font-inter font-semibold">200%+</span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-2 right-2 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
              <div className="absolute bottom-2 left-2 w-12 h-12 bg-accent/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
