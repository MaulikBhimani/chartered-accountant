import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Discuss Your Financial Goals
          </h2>
          <p className="text-lg text-muted-foreground">
            Schedule a consultation today and discover how we can help your business thrive
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input id="name" placeholder="Name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="example@gmail.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can we help?" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your needs..." 
                      rows={6}
                    />
                  </div>
                  
                  <Button size="lg" className="w-full shadow-elegant hover:scale-105 transition-all duration-300">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="shadow-elegant hover:shadow-glow transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    {/* <p className="text-muted-foreground">+91 8160748541</p> */}
                   
                    <p className="text-muted-foreground">+91 8758485159</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    {/* <p className="text-muted-foreground">aakashbhimani@gmail.com</p> */}
                    <p className="text-muted-foreground">nikhilamareliya@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Office</h3>
                    {/* <p className="text-muted-foreground"></p> */}
                    <p className="text-muted-foreground">The Accord, Opp. Park Avenue, Near Arjun Jewellers, Nana Mauva Road, Rajkot - 360004</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Business Hours</h3>
                    <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Sat: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="text-center">
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
