import { memo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Mail, ExternalLink } from "lucide-react";
import shieldifyLogo from "@/assets/shieldify-logo.png";
import { NAVIGATION_ITEMS, DISCORD_CONFIG, EXTERNAL_LINKS, APP_STATS, APP_METADATA } from "@/config/constants";

/**
 * Footer Component
 * 
 * Site footer with navigation links, resources, and social media links.
 * Features:
 * - Responsive grid layout
 * - Navigation links
 * - External resource links
 * - Social media icons
 * - CTA button
 * 
 * @component
 */
const Footer = memo(() => {
  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={shieldifyLogo} 
                alt="Shieldify Logo" 
                className="w-8 h-8"
                loading="lazy"
              />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Shieldify
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              {APP_METADATA.DESCRIPTION}
            </p>
            <div className="flex space-x-2" role="list" aria-label="Social media links">
              <Button variant="ghost" size="icon" asChild aria-label="Visit our GitHub">
                <a href={EXTERNAL_LINKS.GITHUB} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" aria-hidden="true" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild aria-label="Follow us on Twitter">
                <a href={EXTERNAL_LINKS.TWITTER} target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-4 h-4" aria-hidden="true" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild aria-label="Send us an email">
                <a href={EXTERNAL_LINKS.EMAIL}>
                  <Mail className="w-4 h-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2" role="list">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={item.description || `Navigate to ${item.name}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={EXTERNAL_LINKS.DOCS}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href={DISCORD_CONFIG.SUPPORT_SERVER}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Support Server
                </a>
              </li>
              <li>
                <a href="/changelog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Changelog
                </a>
              </li>
              <li>
                <a href="/status" className="text-muted-foreground hover:text-foreground transition-colors">
                  Status Page
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-semibold mb-4">Get Started</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Add Shieldify to your Discord server today and unlock powerful features.
            </p>
            <Button variant="gradient" asChild>
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
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {APP_METADATA.NAME}. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Terms of Service
            </a>
            <a href="/cookies" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;