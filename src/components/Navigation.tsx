import { useState, useEffect, useRef, useCallback, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ExternalLink } from "lucide-react";
import shieldifyLogo from "@/assets/shieldify-logo.png";
import { NAVIGATION_ITEMS, DISCORD_CONFIG } from "@/config/constants";

/**
 * Navigation Component
 * 
 * Main navigation bar with responsive mobile menu.
 * Features:
 * - Responsive design with mobile hamburger menu
 * - Active route highlighting
 * - Smooth animations
 * - Click-outside-to-close functionality
 * - Auto-close on route change
 * 
 * @component
 */
const Navigation = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLNavElement>(null);

  /**
   * Closes mobile menu when clicking outside
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  /**
   * Closes mobile menu on route change
   */
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  /**
   * Toggles mobile menu state
   */
  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  /**
   * Closes mobile menu
   */
  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  /**
   * Checks if a navigation item is currently active
   */
  const isActive = useCallback(
    (href: string): boolean => location.pathname === href,
    [location.pathname]
  );

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" aria-label="Shieldify Home">
            <img 
              src={shieldifyLogo} 
              alt="Shieldify Logo" 
              className="w-8 h-8"
              loading="eager"
            />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Shieldify
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                aria-label={item.description || `Navigate to ${item.name}`}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary"
                    initial={false}
                    aria-hidden="true"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
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
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 border-t border-white/10 overflow-hidden"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col space-y-2">
                {NAVIGATION_ITEMS.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={closeMenu}
                    aria-label={item.description || `Navigate to ${item.name}`}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive(item.href)
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 pt-4 border-t border-white/10">
                  <Button variant="gradient" asChild>
                    <a
                      href={DISCORD_CONFIG.INVITE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                      onClick={closeMenu}
                      aria-label="Invite Shieldify bot to your Discord server"
                    >
                      Invite Shieldify
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
});

Navigation.displayName = "Navigation";

export default Navigation;
