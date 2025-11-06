import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 404 Number */}
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-9xl md:text-[12rem] font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent"
          >
            404
          </motion.h1>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-muted-foreground mb-2">
              Oops! The page you're looking for doesn't exist.
            </p>
            <p className="text-sm text-muted-foreground">
              The page <code className="px-2 py-1 bg-muted rounded text-primary">"{location.pathname}"</code> could not be found.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="gradient" size="lg" asChild>
              <Link to="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Return Home
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/features" className="flex items-center gap-2">
                <Search className="w-4 h-4" />
                Explore Features
              </Link>
            </Button>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 glass p-6 rounded-2xl"
          >
            <p className="text-sm text-muted-foreground mb-4">
              You might be looking for:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/features"
                className="text-primary hover:text-primary/80 transition-colors text-sm"
              >
                Features
              </Link>
              <Link
                to="/premium"
                className="text-primary hover:text-primary/80 transition-colors text-sm"
              >
                Premium
              </Link>
              <Link
                to="/about"
                className="text-primary hover:text-primary/80 transition-colors text-sm"
              >
                About
              </Link>
              <Link
                to="/team"
                className="text-primary hover:text-primary/80 transition-colors text-sm"
              >
                Team
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
