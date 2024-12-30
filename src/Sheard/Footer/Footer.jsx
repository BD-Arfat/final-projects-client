import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1e293b] text-white">
      <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Section */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-4">CONTACT US</h2>
          <p className="text-gray-300">123 ABS Street, Uni 21, Bangladesh</p>
          <p className="text-gray-300">+88 123456789</p>
          <p className="text-gray-300">Mon - Fri: 08:00 - 22:00</p>
          <p className="text-gray-300">Sat - Sun: 10:00 - 23:00</p>
        </div>

        {/* Follow Us Section */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-4">Follow US</h2>
          <p className="text-gray-300">Join us on social media</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-facebook-f">&#xf09a;</i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-instagram">&#xf16d;</i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-twitter">&#xf099;</i>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-black text-center py-4">
        <p className="text-gray-400 text-sm">
          Copyright &copy; CulinaryCloud. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
