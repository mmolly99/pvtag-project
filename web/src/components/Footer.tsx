import { Facebook, Instagram, Linkedin, X } from 'lucide-react';
import './Footer.css';

const copyYear = new Date().getFullYear();

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.5 3.5v7.5c0 2.1 1.7 3.8 3.8 3.8h.7v2.6c-1.5-.3-2.8-1.3-3.5-2.6a3.5 3.5 0 0 1-3.2 2.1 3.5 3.5 0 0 1-3.5-3.5v-8h2v8a1.5 1.5 0 0 0 1.7 1.5 1.5 1.5 0 0 0 1.2-.6 2 2 0 0 0 .3-.7V3.5h1.3z" />
  </svg>
);

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
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/pvtag' },
    { icon: TikTokIcon, label: 'TikTok', href: 'https://www.tiktok.com/@pvtag' },
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/pvtag' },
    { icon: X, label: 'X', href: 'https://x.com/pvtag' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/pvtag' },
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
                href={item.href}
                className="footer-social-icon"
                aria-label={item.label}
                target="_blank"
                rel="noreferrer"
              >
                <item.icon size={20} />
              </a>
            ))}
          </div>
          <div className="footer-payments">
            <span>Kickstarter</span>
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
        <div className="footer-bottom-row">
          <span>© {copyYear} PVTag. All rights reserved.</span>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <span className="footer-legal-divider" />
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
