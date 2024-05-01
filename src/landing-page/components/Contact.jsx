import React from "react";
import { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 570px;
  display: flex;
  justigy-content: center;
  flex-direction: column;
  padding: 32px;
  color: #fff;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;

  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: #4f46e5;
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: black;
  font-size: 18px;
  font-weight: 600;
`;

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  function emailSend(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cffkgsv",
        "template_b7lgbhr",
        e.target,
        "dzIqOZcBgxHU9jkeT"
      )
      .then(
        (result) => {
          console.log("Successful" + result);
          toast.success("Message Sent!");
          console.log("Toast");
          setFormData({ name: "", message: "", email: "", subject: "" });
        },
        (error) => {
          toast.error("Error!");
          console.log("Error: " + error.text);
        }
      );
  }

  return (
    <div className="bg-black px-6 py-24 sm:py-32 lg:px-8" id="contact">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="contact_heading text-white sm:text-4xl">Contact Us</h2>
      </div>
      <Container>
        <ContactForm onSubmit={emailSend}>
          <ContactTitle className="text-indigo-400">
            Get in touch 🚀
          </ContactTitle>
          <ContactInput
            placeholder="Your Email"
            name="email"
            className="text-light-emphasis"
            value={formData.email}
            onChange={handleChange}
          />
          <ContactInput
            placeholder="Your Name"
            name="name"
            className="text-light-emphasis"
            value={formData.name}
            onChange={handleChange}
          />
          <ContactInput
            placeholder="Subject"
            name="subject"
            className="text-light-emphasis"
            value={formData.subject}
            onChange={handleChange}
          />
          <ContactInputMessage
            placeholder="Message"
            rows="3"
            name="message"
            className="text-light-emphasis"
            value={formData.message}
            onChange={handleChange}
          />
          <ContactButton
            id="btn"
            type="submit"
            value="Send Message"
            className="hover:text-white"
          />
        </ContactForm>
      </Container>
      <Toaster />
    </div>
  );
}
