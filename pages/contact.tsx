import React from "react";
import { Faq, Form, Newsletter, Pricing } from "../components/Contact";

const contact = () => {
  return (
    <>
      <Newsletter />
      <Form />
      <Pricing />
      <Faq />
    </>
  );
};

export default contact;
