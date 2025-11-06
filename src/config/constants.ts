/**
 * Application-wide constants and configuration
 * Centralized configuration for easy maintenance and updates
 */

/**
 * Discord Bot Configuration
 */
export const DISCORD_CONFIG = {
  CLIENT_ID: "1233723454029824043",
  PERMISSIONS: "1170845702942033",
  INTEGRATION_TYPE: "0",
  SCOPE: "bot+applications.commands",
  INVITE_URL: `https://discord.com/oauth2/authorize?client_id=1233723454029824043&permissions=1170845702942033&integration_type=0&scope=bot+applications.commands`,
  SUPPORT_SERVER: "https://discord.gg/HszGnP3ABF",
} as const;

/**
 * Application Statistics
 */
export const APP_STATS = {
  SERVERS: "8,000+",
  USERS: "3.9M+",
  UPTIME: "99.9%",
  COMMANDS: "50+",
} as const;

/**
 * External Links
 */
export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/shieldify-bot",
  TWITTER: "https://twitter.com/shieldifybot",
  DOCS: "https://docs.shieldify.bot",
  EMAIL: "mailto:team@shieldify.bot",
} as const;

/**
 * Navigation Items Configuration
 */
export interface NavItem {
  name: string;
  href: string;
  description?: string;
}

export const NAVIGATION_ITEMS: NavItem[] = [
  { name: "Home", href: "/", description: "Return to homepage" },
  { name: "Features", href: "/features", description: "View all features" },
  { name: "Premium", href: "/premium", description: "Premium plans and pricing" },
  { name: "About", href: "/about", description: "Learn about Shieldify" },
  { name: "Team", href: "/team", description: "Meet the team" },
] as const;

/**
 * Application Metadata
 */
export const APP_METADATA = {
  NAME: "Shieldify",
  DESCRIPTION: "The ultimate multipurpose Discord bot with advanced moderation, high-quality music, fun games, and utilities. Trusted by 8,000+ servers and 3.9M+ users.",
  TAGLINE: "The ultimate multipurpose Discord bot",
  VERSION: "1.0.0",
  SECURITY_FOCUS: "Enterprise-grade security and moderation for Discord communities",
} as const;

/**
 * Security Features
 */
export const SECURITY_FEATURES = {
  AUTOMOD: "Advanced AutoMod with AI-powered threat detection",
  LOGGING: "Comprehensive audit logging and activity tracking",
  FILTERS: "Custom word filters and spam protection",
  RATE_LIMITING: "Intelligent rate limiting and abuse prevention",
  ROLE_MANAGEMENT: "Secure role management and permission controls",
  ANTIRAID: "Advanced anti-raid protection and server lockdown",
  VERIFICATION: "Multi-level verification systems",
  BACKUP: "Automated backup and recovery systems",
} as const;

