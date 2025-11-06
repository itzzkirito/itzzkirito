import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { Calendar, Trophy, Users, Zap, Shield, Lock } from "lucide-react";
import { APP_STATS } from "@/config/constants";
import type { Milestone, Statistic } from "@/types";

/**
 * About Page Component
 * 
 * Company story and values with emphasis on security and trust.
 * 
 * @component
 */
const About = memo(() => {
  const milestones: Milestone[] = useMemo(
    () => [
      {
        year: "2021",
        title: "The Beginning",
        description: "Shieldify was born from a vision: creating the most secure and comprehensive Discord bot with enterprise-grade security for communities.",
        icon: Calendar,
      },
      {
        year: "2022",
        title: "First 1,000 Servers",
        description: "Reached our first major milestone with rapid adoption. Our security-first approach gained trust across diverse Discord communities.",
        icon: Users,
      },
      {
        year: "2023",
        title: "Security Innovation",
        description: "Launched advanced AutoMod, anti-raid protection, comprehensive logging, and enterprise security features that set new industry standards.",
        icon: Shield,
      },
      {
        year: "2024",
        title: "8,000+ Protected Servers",
        description: "Now trusted by over 8,000 servers and 3.9 million users worldwide. Leading the industry in Discord security and moderation.",
        icon: Trophy,
      },
    ],
    []
  );

  const stats: Statistic[] = useMemo(
    () => [
      { number: APP_STATS.SERVERS, label: "Protected Servers", color: "text-blue-400" },
      { number: APP_STATS.USERS, label: "Protected Users", color: "text-green-400" },
      { number: APP_STATS.UPTIME, label: "Uptime Guarantee", color: "text-purple-400" },
      { number: "24/7", label: "Security Support", color: "text-pink-400" },
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Security-First Mission</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Our Security Story
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From humble beginnings to protecting millions of users across thousands of servers with enterprise-grade security
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-8 md:p-12 rounded-2xl mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">The Shieldify Security Journey</h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Shieldify began as a security-focused project by three dedicated developers who recognized the critical 
                need for enterprise-grade protection in Discord communities. What started as an advanced moderation tool 
                has evolved into the most trusted security-first bot in the Discord ecosystem, protecting millions of users daily.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Our mission has always been security-first: protect Discord communities with enterprise-grade tools they can trust. 
                From AI-powered AutoMod and anti-raid protection to comprehensive audit logging and real-time threat detection, 
                Shieldify brings military-grade security together with powerful features in one seamless, secure experience.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Today, Shieldify protects over {APP_STATS.SERVERS} servers and {APP_STATS.USERS} users, maintaining {APP_STATS.UPTIME} uptime 
                while continuously evolving our security capabilities to stay ahead of emerging threats in the Discord ecosystem.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              className="glass p-6 rounded-2xl text-center glow-hover"
            >
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Milestones</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                className="flex items-center gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <milestone.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="glass p-6 rounded-2xl flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                    <div className="text-2xl font-bold text-primary mt-2 md:mt-0">
                      {milestone.year}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="glass p-8 md:p-12 rounded-2xl"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Security First</h3>
              <p className="text-muted-foreground">Every feature is built with security and protection as the foundation. Your community's safety is our top priority.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Trust & Reliability</h3>
              <p className="text-muted-foreground">We maintain {APP_STATS.UPTIME} uptime and enterprise-grade security because your community's protection depends on us.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Continuous Innovation</h3>
              <p className="text-muted-foreground">Constantly evolving our security capabilities to stay ahead of threats and provide the best protection possible.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
});

About.displayName = "About";

export default About;