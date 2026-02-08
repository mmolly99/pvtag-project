import { Facebook, Instagram, Linkedin, X } from 'lucide-react';
import './Footer.css';

const copyYear = new Date().getFullYear();

export function Footer() {
  const columns = [
    {
      title: 'Products',
      links: ['Solar Tracker T1', 'App Setup', 'Accessories', 'Pre-order'],
    },
    {
      title: 'Support',
      links: ['Quick Start Guide', 'Troubleshooting', 'Warranty', 'Shipping'],
    },
    {
      title: 'Explore',
      links: ['About PVTag', 'Community Stories', 'Affiliate Program', 'Blog'],
    },
  ];

  const socialIcons = [
    { icon: Instagram, label: 'Instagram' },
    { icon: Facebook, label: 'Facebook' },
    { icon: X, label: 'X' },
    { icon: Linkedin, label: 'LinkedIn' },
  ];

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-columns">
          {columns.map((column) => (
            <div key={column.title} className="footer-column">
              <h4>{column.title}</h4>
              {column.links.map((link) => (
                <a key={link} href="#" className="footer-link">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-side">
          <div className="footer-socials">
            {socialIcons.map((item) => (
              <a
                key={item.label}
                href="#"
                className="footer-social-icon"
                aria-label={item.label}
              >
                <item.icon size={20} />
              </a>
            ))}
          </div>
          <div className="footer-payments">
            <span>Kickstarter</span>
            <span>Shop</span>
            <span>Apple Pay</span>
            <span>Visa</span>
          </div>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-brand-row">
        <div className="footer-brand-block">
          <img src="/pvgot-logo.jpg" alt="pvgot" className="footer-brand-img" />
          <span className="footer-brand-divider" />
          <img src="/pvtag-logo.png" alt="pvtag" className="footer-brand-img" />
        </div>
        <div className="footer-pets-line">
          <span>pvtag</span>
          <span>Pets</span>
          <span>T1</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {copyYear} PVTag. All rights reserved.</span>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <span className="footer-legal-divider" />
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
