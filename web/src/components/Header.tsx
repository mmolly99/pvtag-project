import { useState } from 'react';
import { siteContent } from '../config/site-content';
import './Header.css';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo / Brand */}
        <a href="/" className="header-brand">
          <span className="brand-name">{siteContent.brand.name}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="header-nav desktop-nav">
          {siteContent.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link ${item.highlight ? 'nav-link-highlight' : ''}`}
            >
              {item.label}
              {item.highlight && (
                <span className="nav-badge">{siteContent.infiniteTrails.tagline}</span>
              )}
            </a>
          ))}
        </nav>

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
