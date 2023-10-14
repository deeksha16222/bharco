import React from "react";

export const ContactUs = () => {
  return (
    <div className="container mx-auto my-10 text-center pt-20 custom-container">
      <h1 className="text-4xl font-bold mb-5 text-primary">Contact Us</h1>
      <p className="text-lg mb-5 text-primary font-medium">
        We would love to hear from you! If you have any questions, feedback, or
        inquiries, please don't hesitate to get in touch with us.
      </p>
      <p className="text-lg text-primary">
        Reach out to us at{" "}
        <a
          href="mailto:contact@bharco.in"
          className="text-blue-600 hover:underline"
        >
          contact@bharco.in
        </a>{" "}
        or give us a call at <span className="font-bold">+91 86183 02700</span>.
      </p>
    </div>
  );
};


