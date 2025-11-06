import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Music,
  Gamepad2,
  Wrench,
  Zap,
  Users,
  Lock,
  Ban,
  Eye,
  Key,
  Activity,
  CheckCircle2,
  Server,
  FileText,
} from "lucide-react";
import SecurityBadge from "@/components/SecurityBadge";
import { APP_STATS, APP_METADATA } from "@/config/constants";
import type { Feature } from "@/types";

/**
 * Features Page Component
 * 
 * Comprehensive showcase of Shieldify's features with emphasis on security.
 * Features detailed security capabilities, moderation tools, and other features.
 * 
 * @component
 */
const Features = memo(() => {
  // Security-focused features (primary)
  const securityFeatures: Feature[] = useMemo(
    () => [
      {
        icon: Shield,
        title: "Advanced AutoMod",
        description: "AI-powered automated moderation with real-time threat detection, spam prevention, and intelligent filtering to keep your server safe 24/7.",
        color: "text-red-400",
        bgColor: "bg-red-500/10",
      },
      {
        icon: Lock,
        title: "Enterprise Security",
        description: "Bank-level encryption, secure data handling, and compliance with Discord's security standards. Your server data is always protected.",
        color: "text-blue-400",
        bgColor: "bg-blue-500/10",
      },
      {
        icon: Eye,
        title: "Comprehensive Logging",
        description: "Complete audit trail with detailed logs of all moderation actions, user activities, and security events for full transparency and accountability.",
        color: "text-purple-400",
        bgColor: "bg-purple-500/10",
      },
      {
        icon: Ban,
        title: "Anti-Raid Protection",
        description: "Advanced anti-raid systems with automatic server lockdown, rate limiting, and intelligent detection to prevent malicious attacks.",
        color: "text-orange-400",
        bgColor: "bg-orange-500/10",
      },
      {
        icon: Key,
        title: "Permission Management",
        description: "Granular permission controls with role-based access, custom command permissions, and secure role management systems.",
        color: "text-cyan-400",
        bgColor: "bg-cyan-500/10",
      },
      {
        icon: Activity,
        title: "Real-Time Monitoring",
        description: "Live server monitoring with instant alerts, suspicious activity detection, and proactive threat prevention mechanisms.",
        color: "text-green-400",
        bgColor: "bg-green-500/10",
      },
    ],
    []
  );

  // Additional features
  const additionalFeatures: Feature[] = useMemo(
    () => [
      {
        icon: Music,
        title: "High-Quality Music",
        description: "Stream music from multiple sources with crisp audio quality and queue management.",
        color: "text-green-400",
        bgColor: "bg-green-500/10",
      },
      {
        icon: Gamepad2,
        title: "Fun & Games",
        description: "Engage your community with mini-games, trivia, memes, and entertainment commands.",
        color: "text-yellow-400",
        bgColor: "bg-yellow-500/10",
      },
      {
        icon: Wrench,
        title: "Utility Tools",
        description: "Server management made easy with polls, reminders, role management, and more.",
        color: "text-blue-400",
        bgColor: "bg-blue-500/10",
      },
      {
        icon: Zap,
        title: "Lightning Fast",
        description: "Built for performance with 99.9% uptime and instant command responses.",
        color: "text-purple-400",
        bgColor: "bg-purple-500/10",
      },
      {
        icon: Users,
        title: "Community Focus",
        description: "Features designed to build and strengthen your Discord community connections.",
        color: "text-pink-400",
        bgColor: "bg-pink-500/10",
      },
      {
        icon: Server,
        title: "Scalable Infrastructure",
        description: "Enterprise-grade infrastructure that scales with your community, handling millions of users seamlessly.",
        color: "text-indigo-400",
        bgColor: "bg-indigo-500/10",
      },
    ],
    []
  );

  const securityBadges = useMemo(
    () => [
      {
        icon: Shield,
        title: "Discord Verified",
        description: "Officially verified by Discord with enhanced security and trust indicators.",
        verified: true,
      },
      {
        icon: Lock,
        title: "End-to-End Encrypted",
        description: "All sensitive data is encrypted in transit and at rest using industry-standard protocols.",
        verified: true,
      },
      {
        icon: CheckCircle2,
        title: "GDPR Compliant",
        description: "Fully compliant with GDPR and other data protection regulations worldwide.",
        verified: true,
      },
      {
        icon: FileText,
        title: "Regular Security Audits",
        description: "Continuous security monitoring and regular third-party security audits ensure maximum protection.",
        verified: true,
      },
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
            <span className="text-sm font-medium text-primary">Security-First Design</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Enterprise-Grade Security
            </span>
            <br />
            <span className="text-foreground">For Your Discord Server</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {APP_METADATA.SECURITY_FOCUS}. Trusted by {APP_STATS.SERVERS} servers and {APP_STATS.USERS} users worldwide.
          </p>
        </motion.div>

        {/* Security Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {securityBadges.map((badge, index) => (
              <SecurityBadge key={index} {...badge} />
            ))}
          </div>
        </motion.div>

        {/* Security Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Advanced Security Features
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive security tools designed to protect your community from threats, spam, and malicious activity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="glass p-6 rounded-2xl glow-hover group border border-primary/10 hover:border-primary/30 transition-all"
              >
                <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-secondary bg-clip-text text-transparent">
                Additional Features
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beyond security, Shieldify offers a complete suite of tools to enhance your Discord experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="glass p-6 rounded-2xl glow-hover group"
              >
                <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass p-8 md:p-12 rounded-2xl border border-primary/20"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Trusted by Thousands</h2>
            <p className="text-muted-foreground">
              Join the growing community of servers protected by Shieldify
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {APP_STATS.SERVERS}
              </div>
              <div className="text-muted-foreground">Protected Servers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-2">
                {APP_STATS.USERS}
              </div>
              <div className="text-muted-foreground">Protected Users</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                {APP_STATS.UPTIME}
              </div>
              <div className="text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {APP_STATS.COMMANDS}
              </div>
              <div className="text-muted-foreground">Security Commands</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
});

Features.displayName = "Features";

export default Features;
