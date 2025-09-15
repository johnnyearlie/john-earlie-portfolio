import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Linkedin, Music2, Camera, Users } from 'lucide-react';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally send the form data to a backend
    alert('Thank you for your message! This is a demo form.');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">Get In Touch</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Let's connect! Whether you want to discuss operations, music, or just say hello.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl mb-6">Let's Connect</h3>
              <p className="text-gray-600 mb-8">
                I'm always interested in connecting with fellow professionals, music enthusiasts, 
                dog lovers, and anyone who appreciates good photography. Drop me a line!
              </p>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">Professional Inquiries</h4>
                        <p className="text-gray-600 text-sm mb-2">Operations consulting and collaboration</p>
                        <a 
                          href="mailto:johnnyearlie@gmail.com" 
                          className="text-green-600 hover:text-green-700 text-sm font-medium"
                        >
                          johnnyearlie@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-gray-100 p-3 rounded-full">
                        <Music2 className="h-6 w-6 text-gray-700" />
                      </div>
                      <div>
                        <h4 className="font-medium">Music Collaboration</h4>
                        <p className="text-gray-600 text-sm">Connect with Blaschko Alley for musical projects</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-green-50 p-3 rounded-full border border-green-200">
                        <Users className="h-6 w-6 text-green-700" />
                      </div>
                      <div>
                        <h4 className="font-medium">Personal Connections</h4>
                        <p className="text-gray-600 text-sm">Pet owners, photography enthusiasts, or just to chat</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Your first name" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Your last name" required />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="What's this about?" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell me what's on your mind..." 
                        rows={6}
                        required 
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                      Send Message
                    </Button>
                  </form>
                  

                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}