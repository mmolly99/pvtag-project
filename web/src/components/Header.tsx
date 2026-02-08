import { useState } from 'react';
import { siteContent } from '../config/site-content';
import './Header.css';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <a href="/" className="header-brand">
          <img
            src={siteContent.brand.logo}
            alt={siteContent.brand.name}
            className="brand-logo"
          />
        </a>

        {/* Desktop Navigation - now directly after logo */}
        <nav className="header-nav desktop-nav">
          {siteContent.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link ${item.highlight ? 'nav-link-highlight' : ''}`}
            >
              <span className="nav-link-label">{item.label}</span>
              {item.highlight && (
                <span className="nav-badge-inline">
                  {siteContent.infiniteTrails.tagline}
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Spacer to push mobile menu button to right */}
        <div className="header-spacer"></div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${mobileMenuOpen ? 'mobile-nav-open' : ''}`}>
        {siteContent.navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`mobile-nav-link ${item.highlight ? 'mobile-nav-link-highlight' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
            {item.highlight && (
              <span className="mobile-nav-description">
                {siteContent.infiniteTrails.description}
              </span>
            )}
          </a>
        ))}
      </nav>
    </header>
  );
}
