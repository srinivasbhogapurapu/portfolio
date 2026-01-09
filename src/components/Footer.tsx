import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-8 px-6 md:px-12 border-t border-border"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© 2024 Srinivas Bhogapurapu. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Built with <span className="text-primary">passion</span> and <span className="text-primary">precision</span>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
