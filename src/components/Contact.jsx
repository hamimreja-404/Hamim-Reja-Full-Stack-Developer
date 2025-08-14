import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, Flip } from "react-toastify";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sub, setSub] = useState("");
  const [message, setMessage] = useState("");
  const formData = useRef();

  const validate = () => {
    if (!name.trim()) return "Name is required.";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) return "Valid email is required.";
    if (!sub.trim()) return "Subject is required.";
    if (!message.trim()) return "Message is required.";
    return null;
  };
  const sendEmail = (e) => {
    e.preventDefault();
    const errorIp = validate();
    if (errorIp) {
      toast.error(errorIp, {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: "",
        theme: "light",
        transition: Flip,
      });
      return;
    }
    console.log(formData.current);

    emailjs
      .sendForm(
        "service_ooum2bn",
        "template_9fk68sd",
        formData.current,
        "Cv_DYRZOtzJlxIYzM"
      )
      .then(
        () => {
          toast.success("Message Send Sucessfully!!", {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "light",
            transition: Flip,
          });
          formData.current.reset();
        },
        (error) => {
          toast.error("Failed to send Email!! Try Again", {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "light",
            transition: Flip,
          });
        }
      );
  };
  return (
    <>
      <section className="contact section" id="contact">
        <sapn className="section__subtitle" data-aos="fade-up">
          Get in touch
        </sapn>
        <h3 className="section__title" data-aos="fade-up">
          Contact Me
        </h3>

        <div className="contact__container container grid">
          <div className="contact__content" data-aos="fade-right">
            <h3 className="contact__title contact__title-info">Talk to me</h3>

            <div className="contact__info">
              <div className="contact__card">
                <i className="bx bx-mail-send contact__card-icon"></i>
                <h3 className="contact__card-title">Email</h3>
                <span className="contact__card-data">
                  hamim.reja.mail@gmail.com
                </span>

                <a
                  href="mailto:example@domain.com"
                  target="_blank"
                  className="contact__button"
                >
                  Get in Touch{" "}
                  <i className="bx bx-right-arrow contact__button-icon"></i>
                </a>
              </div>

              <div className="contact__card">
                <i className="bx bxl-linkedin contact__card-icon"></i>
                <h3 className="contact__card-title">linkedin</h3>
                <span className="contact__card-data">Hamim Reja</span>

                <a
                  href="https://www.linkedin.com/in/hamim-reja-a2ba42279"
                  target="_blank"
                  className="contact__button"
                >
                  Get in Touch{" "}
                  <i className="bx bx-right-arrow contact__button-icon"></i>
                </a>
              </div>

              <div className="contact__card">
                <i className="bx bxl-instagram contact__card-icon"></i>
                <h3 className="contact__card-title">Instagram</h3>
                <span className="contact__card-data">hamim__reja</span>

                <a
                  href="https://twitter.com/usertw"
                  target="_blank"
                  className="contact__button"
                >
                  Write Me{" "}
                  <i className="bx bx-right-arrow contact__button-icon"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact__content" data-aos="fade-left">
            <h3 className="contact__title contact__title-form">
              Write Me your Message
            </h3>

            <form
              ref={formData}
              onSubmit={sendEmail}
              action=""
              className="contact__form"
            >
              <div className="contact__form-div">
                <label for="" className="contact__form-tag">
                  Name
                </label>
                <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                  name="name"
                  type="text"
                  placeholder="Enter name"
                  className="contact__form-input"
                />
              </div>

              <div className="contact__form-div">
                <label for="" className="contact__form-tag">
                  Mail
                </label>
                <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  type="text"
                  placeholder="Enter email"
                  className="contact__form-input"
                />
              </div>
              <div className="contact__form-div">
                <label for="" className="contact__form-tag">
                  Subject
                </label>
                <input
                value={sub}
                onChange={(e) => setSub(e.target.value)}
                  name="subject"
                  type="text"
                  placeholder="Enter subject"
                  className="contact__form-input"
                />
              </div>

              <div className="contact__form-div contact__form-area">
                <label for="" className="contact__form-tag">
                  Message
                </label>
                <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                  name="message"
                  id=""
                  cols="30"
                  rows="5"
                  style={{ height: "200px", marginBottom:"0px" }}  
                  placeholder="Write your Message"
                  className="contact__form-input h-40"
                ></textarea>
              </div>

              <button className="button cursor-pointer" style={{ position: "absolute", top: "85%" }} >Send Message</button>
            </form>
          </div>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Flip}
        />
      </section>
    </>
  );
}
