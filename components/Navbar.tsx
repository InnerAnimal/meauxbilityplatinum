"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/pages/about-us", label: "About Us" },
  { href: "/pages/mobility-grants-programs", label: "Grants" },
  { href: "/pages/community", label: "Community" },
  { href: "/pages/resources", label: "Resources" },
  { href: "/pages/get-involved", label: "Get Involved" },
  { href: "/pages/donate", label: "Donate" },
  { href: "/pages/admin", label: "Admin" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 backdrop-blur-xl bg-[var(--charcoal-base)]/80"
            : "py-6 backdrop-blur-lg bg-[var(--charcoal-base)]/60"
        }`}
        style={{
          borderBottom: "1px solid var(--border-subtle)",
          boxShadow: isScrolled
            ? "0 8px 32px rgba(0, 0, 0, 0.3)"
            : "0 4px 16px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-2xl"
                style={{
                  background: "linear-gradient(145deg, var(--brand-teal-light), var(--brand-teal))",
                  boxShadow: "0 4px 12px var(--brand-teal-glow)",
                }}
              >
                🦁
              </div>
              <span
                className={`font-bold transition-all duration-300 ${
                  isScrolled ? "text-lg" : "text-xl"
                }`}
                style={{ color: "var(--brand-teal-light)" }}
              >
                Meauxbility
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-300 ${
                    isActive(link.href)
                      ? "drop-shadow-[0_0_8px_var(--brand-teal-glow)]"
                      : "hover:drop-shadow-[0_0_8px_var(--brand-teal-glow)]"
                  }`}
                  style={{
                    color: isActive(link.href)
                      ? "var(--brand-teal)"
                      : "var(--text-secondary)",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{
                color: "var(--brand-teal)",
                background: "var(--bg-elevated)",
              }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Sheet */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Sheet */}
          <div
            className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] transition-transform duration-300 md:hidden overflow-y-auto"
            style={{
              background: "var(--bg-secondary)",
              borderLeft: "1px solid var(--border-subtle)",
              boxShadow: "-4px 0 24px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <span
                  className="text-xl font-bold"
                  style={{ color: "var(--brand-teal-light)" }}
                >
                  Menu
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg transition-colors"
                  style={{
                    color: "var(--brand-teal)",
                    background: "var(--bg-elevated)",
                  }}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive(link.href)
                        ? "shadow-[0_0_16px_var(--brand-teal-glow)]"
                        : ""
                    }`}
                    style={{
                      color: isActive(link.href)
                        ? "var(--text-inverse)"
                        : "var(--text-primary)",
                      background: isActive(link.href)
                        ? "linear-gradient(145deg, var(--brand-teal-light), var(--brand-teal))"
                        : "var(--bg-elevated)",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}

      {/* Spacer to prevent content from being hidden under fixed navbar */}
      <div className={isScrolled ? "h-16" : "h-24"} />
    </>
  );
}
