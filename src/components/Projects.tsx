import { motion } from "framer-motion";
import { Users, Calendar, Server, ArrowUpRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      number: "01",
      title: "Insurance Policy Checking",
      duration: "March 2024 – Present",
      teamSize: "8",
      environment: "Appian 24.x, 25.x, MariaDB",
      description:
        "Developed an advanced Policy Checking Automation system integrating Intelligent Document Processing (IDP). Automates extraction, comparison, and validation of insurance documents with processing time reduced to 2.5 minutes per document.",
      highlights: [
        "FastAPI-based RESTful service for multi-format file conversion",
        "Appian Connected System integration with secure endpoints",
        "Bidirectional XLSX and HTML conversions",
        "End-to-end process models with email notifications",
      ],
    },
    {
      number: "02",
      title: "Asset Management",
      duration: "March 2023 – Feb 2024",
      teamSize: "7",
      environment: "Appian 23.x, 24.x, MariaDB",
      description:
        "Designed and developed an IT Asset Management application using Appian low-code platform to streamline lifecycle tracking of hardware and software assets with full CRUD functionality.",
      highlights: [
        "Appian Records with relational data models",
        "SAIL-based interfaces with dynamic form validation",
        "Employee self-service asset request workflows",
        "Role-based access control and auditability",
      ],
    },
    {
      number: "03",
      title: "Leave Management System",
      duration: "Jan 2022 – Feb 2023",
      teamSize: "6",
      environment: "Appian 22.x, 23.x, MariaDB",
      description:
        "Developed a comprehensive Leave Management System to streamline employee leave request processes and administrative oversight with complete operations for managing leave requests and balances.",
      highlights: [
        "Data models for multiple leave types",
        "Real-time balance tracking and updates",
        "Responsive SAIL interfaces for employees and managers",
        "Dynamic forms with conditional logic",
      ],
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Featured Projects</h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group card-glass rounded-2xl p-8 hover:border-primary/40 transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-shrink-0">
                  <span className="text-7xl font-bold text-gradient opacity-50 group-hover:opacity-100 transition-opacity">
                    {project.number}
                  </span>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>

                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      {project.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      Team of {project.teamSize}
                    </span>
                    <span className="flex items-center gap-2">
                      <Server className="w-4 h-4 text-primary" />
                      {project.environment}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-3">
                    {project.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-sm"
                      >
                        <span className="w-1.5 h-1.5 mt-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
