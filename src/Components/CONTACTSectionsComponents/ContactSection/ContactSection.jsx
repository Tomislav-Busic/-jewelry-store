import React from "react";
import "./ContactSection.scss";
import { AnimationBtn } from "../../AnimationBtn/AnimationBtn";

export const ContactSection = () => {
  return (
    <div className="contact-section">
      <br />
      <h1>Kontakt</h1>
      <form>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">Slanje</button>
        <br />
      </form>
    </div>
  );
};
