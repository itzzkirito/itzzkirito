import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Star, Crown, Zap, Shield, Lock } from "lucide-react";
import { DISCORD_CONFIG } from "@/config/constants";
import type { PricingPlan } from "@/types";

/**
 * Premium Page Component
 * 
 * Pricing plans with emphasis on security features and premium capabilities.
 * 
 * @component
 */
const Premium = memo(() => {
  const plans: PricingPlan[] = useMemo(
    () => [
      {
        name: "Free",
        price: "$0",
        period: "forever",
        description: "Perfect for small communities",
        icon: Star,
        features: [
          "Basic moderation tools",
          "Essential security features",
          "Music playback (limited)",
          "Standard commands",
          "Community support",
          "Basic analytics",
        ],
        popular: false,
        gradient: "bg-gradient-to-br from-gray-600 to-gray-800",
      },
      {
        name: "Premium",
        price: "$4.99",
        period: "per month",
        description: "Enhanced security for growing servers",
        icon: Crown,
        features: [
          "Advanced AutoMod & threat detection",
          "Anti-raid protection & server lockdown",
          "Comprehensive audit logging",
          "Unlimited music streaming",
          "Custom commands & responses",
          "Priority security support",
          "Advanced analytics & insights",
          "Role rewards & leveling",
          "Custom welcome messages",
        ],
        popular: true,
        gradient: "bg-gradient-primary",
      },
      {
        name: "Pro",
        price: "$9.99",
        period: "per month",
        description: "Enterprise security for large communities",
        icon: Zap,
        features: [
          "Everything in Premium",
          "Enterprise-grade security suite",
          "24/7 dedicated security support",
          "Custom security configurations",
          "Advanced threat intelligence",
          "Custom bot branding",
          "Multi-server management",
          "Beta security feature access",
          "Custom integrations & APIs",
          "White-label options",
        ],
        popular: false,
        gradient: "bg-gradient-secondary",
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
            <span className="text-sm font-medium text-primary">Security-First Plans</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Premium Security Plans
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlock enterprise-grade security features and advanced moderation tools to protect your Discord community
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative glass p-8 rounded-2xl glow-hover ${
                plan.popular ? "ring-2 ring-primary scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`w-16 h-16 ${plan.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "gradient" : "glass"}
                className="w-full"
                size="lg"
                asChild={plan.price !== "$0"}
              >
                {plan.price === "$0" ? (
                  <a href={DISCORD_CONFIG.INVITE_URL} target="_blank" rel="noopener noreferrer">
                    Get Started Free
                  </a>
                ) : (
                  <span>Upgrade Now</span>
                )}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass p-8 rounded-2xl"
        >
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I cancel anytime?</h3>
              <p className="text-muted-foreground">Yes, you can cancel your subscription at any time. Your premium features will remain active until the end of your billing period.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Do you offer refunds?</h3>
              <p className="text-muted-foreground">We offer a 7-day money-back guarantee for all premium plans. Contact our support team for assistance.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">How do I upgrade?</h3>
              <p className="text-muted-foreground">Simply click the upgrade button and follow the secure checkout process. Your new features will be activated immediately.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Need help?</h3>
              <p className="text-muted-foreground">Our support team is here to help! Join our Discord server or contact us directly for any questions.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
});

Premium.displayName = "Premium";

export default Premium;