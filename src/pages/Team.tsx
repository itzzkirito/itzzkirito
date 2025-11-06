import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DISCORD_CONFIG, EXTERNAL_LINKS } from "@/config/constants";
import type { TeamMember } from "@/types";

/**
 * Team Page Component
 * 
 * Showcases the development team behind Shieldify's security-focused platform.
 * 
 * @component
 */
const Team = memo(() => {
  const teamMembers: TeamMember[] = useMemo(
    () => [
      {
        name: "wizardoesmagic",
        role: "Lead Developer & Founder",
        description: "Full-stack developer with expertise in Discord.js and bot architecture. Passionate about creating seamless user experiences.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        skills: ["TypeScript", "Node.js", "Discord.js", "Database Design"],
        social: {
          github: "https://github.com/wizardoesmagic",
          twitter: "https://twitter.com/wizardoesmagic",
          email: "wizard@shieldify.bot"
        }
      },
      {
        name: "frank",
        role: "Backend Engineer",
        description: "Specializes in scalable backend systems and API development. Ensures Shieldify runs smoothly at scale.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        skills: ["Python", "Redis", "PostgreSQL", "Microservices"],
        social: {
          github: "https://github.com/frank",
          twitter: "https://twitter.com/frank",
          email: "frank@shieldify.bot"
        }
      },
      {
        name: "kirito",
        role: "Frontend Developer & UI/UX",
        description: "Creates beautiful and intuitive interfaces. Focuses on user experience and modern design principles.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
        skills: ["React", "TypeScript", "Tailwind CSS", "Figma"],
        social: {
          github: "https://github.com/itzzkirito",
          twitter: "https://twitter.com/kirito",
          email: "kirito@shieldify.bot"
        }
      }
    ],
    []
  );

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Meet the Team
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The passionate developers behind Shieldify who work tirelessly to bring you the best Discord bot experience
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass p-8 rounded-2xl glow-hover group"
            >
              {/* Role Badge */}
              <div className="relative mb-6">
                <div className="flex justify-center">
                  <div className="bg-gradient-primary px-6 py-2 rounded-full text-sm font-medium text-white">
                    {member.role.split('&')[0]}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-3 text-center">Technologies</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-3">
                <Button variant="glass" size="icon" asChild>
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="glass" size="icon" asChild>
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="glass" size="icon" asChild>
                  <a
                    href={`mailto:${member.social.email}`}
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass p-8 rounded-2xl"
        >
          <h2 className="text-2xl font-bold text-center mb-8">Team Achievements</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                3
              </div>
              <div className="text-muted-foreground">Core Developers</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-2">
                2+
              </div>
              <div className="text-muted-foreground">Years of Development</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-muted-foreground">Features Built</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-muted-foreground">Dedicated Support</div>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl font-bold mb-4">Want to Get in Touch?</h2>
          <p className="text-muted-foreground mb-6">
            Have questions, suggestions, or just want to say hi? We'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" asChild>
              <a href={DISCORD_CONFIG.SUPPORT_SERVER} target="_blank" rel="noopener noreferrer">
                Join Our Discord
              </a>
            </Button>
            <Button variant="glass" asChild>
              <a href={EXTERNAL_LINKS.EMAIL}>
                Email the Team
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
});

Team.displayName = "Team";

export default Team;
