import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Server, Shield, Lock, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/shieldify-hero.jpg";
import { DISCORD_CONFIG, APP_STATS } from "@/config/constants";

/**
 * Hero Component
 * 
 * Main hero section with call-to-action and key statistics.
 * Features:
 * - Animated gradient background
 * - Responsive layout
 * - Key statistics display
 * - Call-to-action buttons
 * 
 * @component
 */
const Hero = memo(() => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Enterprise Security</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-2">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Shieldify
                </span>
                <br />
                <span className="text-foreground">
                  Secure Discord Bot
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                Enterprise-grade security & moderation for your community
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl"
            >
              The ultimate multipurpose Discord bot with moderation, music, fun commands, and so much more. 
              Trusted by <span className="text-primary font-semibold">{APP_STATS.SERVERS}</span> and 
              <span className="text-accent font-semibold"> {APP_STATS.USERS}</span>.
            </motion.p>

            {/* Security Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-6 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 glass px-3 py-1.5 rounded-lg border border-primary/20">
                <Shield className="w-4 h-4 text-primary" aria-hidden="true" />
                <span className="text-xs font-medium">Discord Verified</span>
              </div>
              <div className="flex items-center gap-2 glass px-3 py-1.5 rounded-lg border border-primary/20">
                <Lock className="w-4 h-4 text-primary" aria-hidden="true" />
                <span className="text-xs font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2 glass px-3 py-1.5 rounded-lg border border-primary/20">
                <CheckCircle2 className="w-4 h-4 text-green-400" aria-hidden="true" />
                <span className="text-xs font-medium">GDPR Compliant</span>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-lg" role="status" aria-label={`${APP_STATS.SERVERS} servers`}>
                <Server className="w-5 h-5 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium">{APP_STATS.SERVERS} Protected Servers</span>
              </div>
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-lg" role="status" aria-label={`${APP_STATS.USERS} users`}>
                <Users className="w-5 h-5 text-accent" aria-hidden="true" />
                <span className="text-sm font-medium">{APP_STATS.USERS} Protected Users</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="gradient" size="lg" asChild>
                <a
                  href={DISCORD_CONFIG.INVITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                  aria-label="Invite Shieldify bot to your Discord server"
                >
                  Invite Shieldify
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/features" className="scroll-smooth">
                  Explore Features
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Shieldify Discord Bot - Advanced moderation, music, and utility features for Discord servers"
                className="w-full h-auto rounded-2xl shadow-2xl glow"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full opacity-20 blur-xl"
            ></motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-secondary rounded-full opacity-20 blur-xl"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
