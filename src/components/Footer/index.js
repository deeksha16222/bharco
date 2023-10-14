import React from "react";
import logo from "../../assets/images/logo/logo.svg";

export const Footer = () => {
  return (
    <div className="footer bg-primary pt-20">
      <div className="container mx-auto px-4 py-8 md:flex md:items-start md:gap-4 footer-block-container">

        {/* Logo */}
        <div className="md:w-auto mb-4 md:mb-0 footer-logo footer-block">
          <img src={logo} alt="logo" />
        </div>

        {/* Navigation Links */}
        <div className="flex-1 md:w-auto footer-block">
          <ul>
            <li className="text-white font-bold mb-4 md:mb-0">Product</li>
            <li className="mb-2">
              <a href="#features" className="hover:underline">Features</a>
            </li>
            <li>
              <a href="#pricing" className="hover:underline">Pricing</a>
            </li>
          </ul>
        </div>

        <div className="flex-1 md:w-auto footer-block">
          <ul>
            <li className="text-white font-bold mb-4 md:mb-0">Resources</li>
            <li className="mb-2">
              <a href="./blog" className="hover:underline">Blog</a>
            </li>
            <li className="mb-2">
              <a href="#user-guides" className="hover:underline">User Guides</a>
            </li>
            <li>
              <a href="#webinar" className="hover:underline">Webinar</a>
            </li>
          </ul>
        </div>

        <div className="flex-1 md:w-auto footer-block">
          <ul>
            <li className="text-white font-bold mb-4 md:mb-0">Community</li>
            <li className="mb-2">
              <a href="#developers" className="hover:underline">Developers</a>
            </li>
            <li>
              <a href="#users" className="hover:underline">Users</a>
            </li>
          </ul>
        </div>

        <div className="flex-1 md:w-auto footer-block">
          <ul>
            <li className="text-white font-bold mb-4 md:mb-0">Company</li>
            <li className="mb-2">
              <a href="./about" className="hover:underline">About</a>
            </li>
            <li>
              <a href="./contact-us" className="hover:underline" >Join Us</a>
            </li>
          </ul>
        </div>

        <div className="flex-1 md:w-auto footer-block">
          <ul>
            <li className="text-white font-bold mb-4 md:mb-0">Support</li>
            <li className="mb-2">
              <a href="./contact-us" className="hover:underline">Help Center</a>
            </li>
            <li>
              <a href="./chat-support" className="hover:underline">Chat Support</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};



