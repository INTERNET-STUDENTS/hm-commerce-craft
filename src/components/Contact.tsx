
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-inter font-bold text-gray-900 mb-4">
            Let's Grow Your Business Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Ready to take your eCommerce business to the next level? Get in touch with our experts for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-inter font-bold text-gray-900">
                Get Your Free Consultation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <Input 
                    placeholder="John" 
                    className="font-inter"
                  />
                </div>
                <div>
                  <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Doe" 
                    className="font-inter"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="font-inter"
                />
              </div>

              <div>
                <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <Input 
                  type="tel" 
                  placeholder="+1 (555) 123-4567" 
                  className="font-inter"
                />
              </div>

              <div>
                <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                  Current Platforms
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-md font-inter">
                  <option>Select your current platforms</option>
                  <option>Amazon only</option>
                  <option>Amazon + Others</option>
                  <option>Multiple platforms</option>
                  <option>Just starting out</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                  Tell us about your business goals
                </label>
                <Textarea 
                  placeholder="Describe your current challenges and what you'd like to achieve..."
                  className="font-inter h-32"
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-inter font-semibold py-3 h-auto">
                Schedule My Free Consultation
              </Button>

              <p className="text-sm text-gray-500 text-center font-inter">
                We'll respond within 2 hours during business hours
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600 font-inter">+1 (555) 123-4567</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 font-inter">
                  Available Monday-Friday, 9 AM - 6 PM EST
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600 font-inter">info@hannanmarketplace.com</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 font-inter">
                  We'll respond within 2 hours
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MessageSquare className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-gray-900">Live Chat</h3>
                    <p className="text-gray-600 font-inter">Chat with our experts</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white font-inter font-semibold"
                >
                  Start Live Chat
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-6 text-white">
              <h3 className="font-inter font-bold text-xl mb-4">Why Choose Us?</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-inter">Response Time</span>
                  <span className="font-inter font-semibold">< 2 Hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-inter">Success Rate</span>
                  <span className="font-inter font-semibold">98%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-inter">Avg Revenue Growth</span>
                  <span className="font-inter font-semibold">200%+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
