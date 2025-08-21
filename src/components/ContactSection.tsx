import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Building2, Users, CheckCircle } from "lucide-react";
const ContactSection = () => {
  return <section id="contact" className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Contact Us
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Partner With Us in Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to explore collaboration opportunities in regenerative medicine? 
            Contact our team to discuss partnerships and professional consulting.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              <Card className="border-0 shadow-card-soft">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Company Address</h4>
                      <p className="text-muted-foreground">
                        No. 2-1, 7th Rd., Industrial Park<br />
                        Xitun District, Taichung City<br />
                        Taiwan (Taichung Industrial Park)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card-soft">
                
              </Card>

              <Card className="border-0 shadow-card-soft">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-success" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Industry Focus</h4>
                      <p className="text-muted-foreground">
                        Biochemical Technology R&D<br />
                        Biotechnology Research
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Why Choose Us */}
            <Card className="border-0 shadow-card-soft">
              <CardHeader>
                <CardTitle>Why Partner with Dafen Health?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {["Professional regenerative medicine R&D team", "Industry-academia collaboration with national hospitals", "International standard quality management", "Innovative stem cell and exosome technology"].map((item, index) => <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>)}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-card-soft">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 1-2 business days.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name *</label>
                      <Input placeholder="Enter your full name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Company/Organization</label>
                      <Input placeholder="Your company or organization" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email *</label>
                      <Input type="email" placeholder="your.email@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone</label>
                      <Input placeholder="Your phone number" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject *</label>
                    <Input placeholder="Brief subject of your inquiry" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message *</label>  
                    <Textarea placeholder="Please describe your needs, interests, or questions in detail..." className="min-h-[120px]" />
                  </div>

                  <div className="text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg">
                    <Mail className="w-4 h-4 inline mr-2" />
                    We will respond to your inquiry within 1-2 business days.
                  </div>

                  <Button type="submit" size="lg" className="w-full shadow-medical">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;