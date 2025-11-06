/**
 * TypeScript type definitions for the application
 * Centralized type definitions for better type safety and reusability
 */

/**
 * Team member information structure
 */
export interface TeamMember {
  name: string;
  role: string;
  description: string;
  avatar: string;
  skills: string[];
  social: {
    github: string;
    twitter: string;
    email: string;
  };
}

/**
 * Feature card structure
 */
export interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
  bgColor?: string;
}

/**
 * Pricing plan structure
 */
export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  popular: boolean;
  gradient: string;
}

/**
 * Milestone structure for timeline
 */
export interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

/**
 * Statistic display structure
 */
export interface Statistic {
  number: string;
  label: string;
  color?: string;
}

