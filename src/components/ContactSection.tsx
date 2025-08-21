import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Building2, Users, CheckCircle, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import contactBackground from "@/assets/contact-innovation-background.jpg";
const ContactSection = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

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

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Contact Form */}
          <Card className="border-0 bg-white/10 backdrop-blur-sm shadow-2xl">
            <CardHeader>
              <CardTitle className="text-white text-center flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Name *</Label>
                    <Input
                      id="name"
                      {...register("name", { required: "Name is required" })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-300 text-sm">{errors.name.message as string}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                      placeholder="your.email@company.com"
                    />
                    {errors.email && (
                      <p className="text-red-300 text-sm">{errors.email.message as string}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white">Subject</Label>
                  <Input
                    id="subject"
                    {...register("subject")}
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                    placeholder="Partnership opportunity, consultation, etc."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Message *</Label>
                  <Textarea
                    id="message"
                    {...register("message", { required: "Message is required" })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 min-h-[120px]"
                    placeholder="Tell us about your project, collaboration interests, or how we can help..."
                  />
                  {errors.message && (
                    <p className="text-red-300 text-sm">{errors.message.message as string}</p>
                  )}
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white text-center mb-8">Get in Touch</h3>
            
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
      </div>
    </section>;
};
export default ContactSection;