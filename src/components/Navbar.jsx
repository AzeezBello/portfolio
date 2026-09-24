import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight, Menu } from "lucide-react";

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { styles } from "@/styles";

const linkClass = ({ isActive }) =>
  cn(
    "relative text-[15px] font-medium transition-colors hover:text-white",
    isActive ? "text-white after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-primary" : "text-muted-foreground"
  );

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        `${styles.paddingX} fixed top-0 z-40 w-full py-3 transition-colors duration-300`,
        scrolled ? "border-b border-border/60 bg-background/85 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link to="/" aria-label="Ademola Bello, home" className="rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <Logo />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink to={link.path} end={link.path === "/"} className={linkClass}>
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button asChild size="sm">
            <Link to="/contact">
              Start a project <ArrowRight />
            </Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-white" aria-label="Open menu">
              <Menu className="!size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col gap-8 pt-16">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <ul className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <SheetClose asChild>
                    <NavLink
                      to={link.path}
                      end={link.path === "/"}
                      className={({ isActive }) =>
                        cn("text-2xl font-semibold", isActive ? "text-white" : "text-muted-foreground")
                      }
                    >
                      {link.title}
                    </NavLink>
                  </SheetClose>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-3">
              <SheetClose asChild>
                <Button asChild size="lg">
                  <Link to="/contact">
                    Start a project <ArrowRight />
                  </Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
