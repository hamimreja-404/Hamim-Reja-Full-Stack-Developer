import React, { useRef, useState } from "react";

export default function Form() {
  const formData = useRef();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [text, setText] = useState("");
  const [star, setstar] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/testimonials", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, role, text, star }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Message saved successfully!");
        setName("");
        setRole("");
        setText("");
        setstar("");
      })
      .catch((err) => {
        console.error(err);
        alert("Error saving message");
      });
  };

  return (
    <>
    <div className="contact__content flex h-[750px] items-center justify-center mt-10">
<div className="">
        <h3 className="text-2xl font-bold text-center">
          Write Your Review 
        </h3>

      <form ref={formData} onSubmit={handleSubmit} className="contact__form mt-10">
        <div className="contact__form-div mt-10" >
          <label htmlFor="name" className="contact__form-tag">
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
          <label htmlFor="role" className="contact__form-tag">
            Role
          </label>
          <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            name="role"
            type="text"
            placeholder="Enter role"
            className="contact__form-input"
          />
        </div>

        <div className="contact__form-div contact__form-area">
          <label htmlFor="text" className="contact__form-tag">
            Testimonial Text
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            name="text"
            cols="30"
            rows="5"
            placeholder="Write your testimonial"
            className="contact__form-input h-40"
          ></textarea>
        </div>

        <div className="contact__form-div">
          <label htmlFor="star" className="contact__form-tag">
            star (1-5)
          </label>
          <input
            value={star}
            onChange={(e) => setstar(e.target.value)}
            name="star"
            type="number"
            min="1"
            max="5"
            placeholder="Enter rating"
            className="contact__form-input"
          />
        </div>

        <button type="submit" className="button cursor-pointer">
          Send Testimonial
        </button>
      </form>
      </div>
    </div>
    </>
  );
}
