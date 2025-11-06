import { memo } from "react";
import { Shield, Lock, CheckCircle2, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

interface SecurityBadgeProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  verified?: boolean;
}

/**
 * Security Badge Component
 * 
 * Displays security features and trust indicators with professional styling.
 * Used to showcase security capabilities and build user trust.
 * 
 * @component
 */
const SecurityBadge = memo(({ icon: Icon, title, description, verified = false }: SecurityBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-lg">{title}</h3>
            {verified && (
              <CheckCircle2 className="w-5 h-5 text-green-400" aria-label="Verified" />
            )}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
});

SecurityBadge.displayName = "SecurityBadge";

export default SecurityBadge;

