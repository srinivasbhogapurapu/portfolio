import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Years Experience", value: "3.9+" },
    { label: "Projects Delivered", value: "3+" },
    { label: "Appian Version", value: "22.x-25.x" },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Professional Summary</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Experienced Appian Developer with expertise in designing applications on the Appian platform. 
              Proficient in Appian BPM, SAIL interfaces, Process Modeler, process design, business rules, 
              and user interface development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Successfully developed multiple end-to-end projects by collaborating closely with 
              cross-functional teams and implementing customized workflows that drive business efficiency.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 p-4 card-glass rounded-lg">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Sree Tammina Software Solutions</h4>
                  <p className="text-sm text-muted-foreground">Appian Developer · Jan 2022 - Present</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 card-glass rounded-lg">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">B.Tech</h4>
                  <p className="text-sm text-muted-foreground">Aditya Institute of Technology and Management</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 card-glass rounded-lg">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Appian Senior Developer</h4>
                  <p className="text-sm text-muted-foreground">Certified Professional</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="card-glass rounded-xl p-8 text-center hover:border-primary/40 transition-all duration-300"
              >
                <div className="text-5xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
