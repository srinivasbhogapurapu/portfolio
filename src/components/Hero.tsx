import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow delay-1000" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            Appian Senior Developer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="text-foreground">Srinivas</span>
          <br />
          <span className="text-gradient">Bhogapurapu</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          3.9 years of experience designing enterprise applications on the Appian platform.
          Proficient in BPM, SAIL interfaces, and building customized workflows.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10 text-sm text-muted-foreground"
        >
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            Hyderabad, India
          </span>
          <span className="hidden md:block w-1 h-1 bg-muted-foreground rounded-full" />
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            +91 80194 42682
          </span>
          <span className="hidden md:block w-1 h-1 bg-muted-foreground rounded-full" />
          <span className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            srinivas.bhogapurapu@tammina.com
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button size="lg" className="glow-effect">
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
          <Button size="lg" variant="outline">
            <Mail className="w-4 h-4 mr-2" />
            Get in Touch
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
