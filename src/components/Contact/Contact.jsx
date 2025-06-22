import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Info Box */}
      <div className="bg-[#0d081f] border border-gray-700 text-white rounded-lg p-6 w-full max-w-md mb-10 shadow-lg">
        <h3 className="text-lg font-semibold text-center mb-4">📞 Let's Connect</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Phone className="text-purple-400" />
            <a
              href="tel:+917365818084"
              className="text-gray-300 hover:text-purple-400 transition duration-300"
            >
              +91 7365818084
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="text-purple-400" />
            <a
              href="mailto:bimangharai721443@gmail.com"
              className="text-gray-300 hover:text-purple-400 transition duration-300"
            >
              bimangharai721443@gmail.com
            </a>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Contact;
