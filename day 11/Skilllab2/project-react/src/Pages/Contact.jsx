import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <>
      <h1>Contact Us</h1>

      <p>Fill out the form below to get in touch with us:</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required /><br /><br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required /><br /><br />

        <label htmlFor="message">Message:</label><br />
        <textarea id="message" name="message" rows="4" required></textarea><br /><br />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Contact;