import React from "react";
import "../assets/Footer.css";

const links = [
  { href: "/", text: "Αρχική" },
  { href: "/products", text: "Προϊόντα" },
  { href: "/contact", text: "Επικοινωνία" },
  { href: "/returnPolicy", text: "Πολιτική Επιστροφών" },
  { href: "/terms", text: "Όροι Χρήσης" },
  { href: "/shippingInfo", text: "Τρόποι Αποστολής" },
  { href: "/paymentMethods", text: "Τρόποι Πληρωμής" },
];

const socials = [
  { href: "#", icon: "fab fa-facebook" },
  {
    href: "https://www.instagram.com/castine_official/",
    icon: "fab fa-instagram",
  },
  {
    href: "https://www.tiktok.com/@castine_official?_t=8lOL9hGZZ5M&_r=1",
    icon: "fab fa-tiktok",
  },
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
        <div className="footer-contact">
          {" "}
          {/* Προσθήκη της ενότητας επικοινωνίας */}
          <ul>
            <li>Διεύθυνση: Φρυνης 55, Αθήνα 11633</li>
            <li>
              Email: <a href="mailto:info@castine.gr">info@castine.gr</a>
            </li>
            <li>
              Τηλέφωνο: <a href="tel:+306989417765">698 9417765</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <ul>
            {socials.map((social, index) => (
              <li key={index}>
                <a href={social.href}>
                  <i className={social.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-copyright">&copy; 2024 Castine</div>
      </div>
    </footer>
  );
};
