import { motion } from "framer-motion";
import { Database, Code, Cog, Layers, Terminal, GitBranch } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Database,
      title: "Database",
      skills: ["SQL", "MySQL", "MariaDB"],
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: Code,
      title: "Programming",
      skills: ["Java", "Python"],
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Cog,
      title: "Methodologies",
      skills: ["Agile (Scrum)", "SDLC"],
      color: "from-orange-400 to-amber-500",
    },
    {
      icon: Layers,
      title: "Frameworks",
      skills: ["Django", "React", "Flask"],
      color: "from-purple-400 to-violet-500",
    },
    {
      icon: Terminal,
      title: "API's",
      skills: ["FastAPI"],
      color: "from-pink-400 to-rose-500",
    },
    {
      icon: GitBranch,
      title: "Tools",
      skills: ["GitHub Actions", "Git"],
      color: "from-indigo-400 to-blue-500",
    },
  ];

  const appianVersions = ["22.x", "23.x", "24.x", "25.x"];

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Technical Skills</h2>
        </motion.div>

        {/* Appian Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 p-8 card-glass rounded-2xl border-primary/30 glow-soft"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-2">Appian Platform Specialist</h3>
              <p className="text-muted-foreground">Certified Senior Developer with expertise across multiple versions</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {appianVersions.map((version) => (
                <span
                  key={version}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                >
                  Appian {version}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-glass rounded-xl p-6 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-20`}>
                  <category.icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-muted rounded-lg text-sm text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
