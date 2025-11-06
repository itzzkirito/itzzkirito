import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Shield, Music, Zap, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { DISCORD_CONFIG } from "@/config/constants";
import type { Feature } from "@/types";

/**
 * Home Page Component
 * 
 * Main landing page featuring hero section, quick features overview,
 * and call-to-action sections.
 * 
 * @component
 */
const Home = memo(() => {
  const quickFeatures: Feature[] = useMemo(
    () => [
      {
        icon: Shield,
        title: "Enterprise Security",
        description: "Advanced AutoMod, anti-raid protection, and comprehensive logging",
        color: "text-red-400",
      },
      {
        icon: Music,
        title: "High-Quality Music",
        description: "Stream music with crystal-clear audio",
        color: "text-green-400",
      },
      {
        icon: Zap,
        title: "Lightning Fast",
        description: "99.9% uptime and instant responses",
        color: "text-purple-400",
      },
      {
        icon: Users,
        title: "Community Focus",
        description: "Built to strengthen your community",
        color: "text-pink-400",
      },
    ],
    []
  );

  const benefits = useMemo(
    () => [
      "Free forever with essential features",
      "Easy setup in under 2 minutes",
      "24/7 community support",
      "Regular updates and new features",
      "No credit card required",
      "Works on all Discord servers",
    ],
    []
  );

  return (
    <div>
      <Hero />
      
      {/* Quick Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Everything You Need
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to make your Discord server the best it can be
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {quickFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-6 rounded-xl glow-hover group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 md:p-12 rounded-2xl text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of servers already using Shieldify to enhance their Discord experience
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
              <div className="text-left">
                <h4 className="font-semibold mb-4">What You Get:</h4>
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-center gap-4">
                <Button variant="gradient" size="lg" asChild>
                  <a
                    href={DISCORD_CONFIG.INVITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                    aria-label="Invite Shieldify bot to your Discord server"
                  >
                    Invite Shieldify
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <Link to="/features" className="flex items-center justify-center gap-2">
                    Explore All Features
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
});

Home.displayName = "Home";

export default Home;