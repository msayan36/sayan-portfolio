import React from "react";
import Button from "../components/Button";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">Want to Connect ?</h2>
      <h2 className="contact-sub-title">Get in Touch</h2>
      <p className="contact-text">
        Currently I am looking for opportunities for working on Industry level
        projects. If you are interested in hiring me or working with me on any
        project please get in touch with me.
      </p>
      <div className="contact-cta">
        <Button text="Say Hello" link="mailto:sayanmunshi36@gmail.com" />
      </div>
    </motion.div>
  );
};

export default Contact;
