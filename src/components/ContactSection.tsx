import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Building2, Users, CheckCircle } from "lucide-react";
import contactBackground from "@/assets/contact-innovation-background.jpg";
const ContactSection = () => {
  return <section id="contact" className="py-16 md:py-20 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={contactBackground} 
          alt="Innovation laboratory collaboration" 
          className="w-full h-full object-cover"
          width="1335"
          height="856"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-800/85 to-purple-900/90"></div>
      </div>
      
      {/* Final section separator */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent z-10"></div>
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-8 h-px bg-gradient-to-r from-blue-300/50 via-purple-400/60 to-indigo-300/50"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-200 border-blue-200/50 bg-white/10 backdrop-blur-sm">
            Contact Us
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Partner With Us in Innovation
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to explore collaboration opportunities in regenerative medicine? 
            Contact our team to discuss partnerships and professional consulting.
          </p>
        </div>

        {/* Contact Information - Centered Layout */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Get in Touch</h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 bg-white/10 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-white">Company Address</h4>
                    <p className="text-blue-100">
                      No. 2-1, 7th Rd., Industrial Park<br />
                      Xitun District, Taichung City<br />
                      Taiwan (Taichung Industrial Park)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/10 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-purple-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-white">Industry Focus</h4>
                    <p className="text-blue-100">
                      Biochemical Technology R&D<br />
                      Biotechnology Research
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose Us */}
          <Card className="border-0 bg-white/10 backdrop-blur-sm shadow-2xl">
            <CardHeader>
              <CardTitle className="text-white text-center">Why Partner with Dafen Health?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {["Professional regenerative medicine R&D team", "Industry-academia collaboration with national hospitals", "International standard quality management", "Innovative stem cell and exosome technology"].map((item, index) => <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                    <span className="text-blue-100">{item}</span>
                  </div>)}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default ContactSection;