import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "srinivas.bhogapurapu@tammina.com",
      href: "mailto:srinivas.bhogapurapu@tammina.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 80194 42682",
      href: "tel:+918019442682",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Let's Connect</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Interested in collaborating or have a project in mind? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-glass rounded-xl p-6 text-center hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{item.label}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                {item.value}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button size="lg" className="glow-effect">
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
