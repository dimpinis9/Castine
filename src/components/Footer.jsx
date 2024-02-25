
import React from 'react';
import '../assets/Footer.css';


const links = [
  { href: "/", text: "Αρχική" },
  { href: "/about", text: "Σχετικά" },
  { href: "/products", text: "Προϊόντα" },
  { href: "/contact", text: "Επικοινωνία" },
  { href: "/returnPolicy", text: "Πολιτική Επιστροφών" },
];

const socials = [
  { href: "#", icon: "fab fa-facebook" },
  { href: "#", icon: "fab fa-instagram" },
  { href: "#", icon: "fab fa-twitter" },
];

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-links">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-social">
          <ul>
            {socials.map((social, index) => (
              <li key={index}>
                <a href={social.href}><i className={social.icon}></i></a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-copyright"> {/* Προσθήκη του copyright div */}
          &copy; 2024 Castine
        </div>
      </div>
    </footer>
  );
};