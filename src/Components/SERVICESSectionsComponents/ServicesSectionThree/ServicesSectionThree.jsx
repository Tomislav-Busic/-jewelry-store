import React from "react";
import "./ServicesSectionThree.scss";
import img from "../../../images/work5.jpg";

export const ServicesSectionThree = () => {
  return (
    <div className="services-s-three">
      <div className="left-s-side">
        <h2>Popravci i restauriranje nakita</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="right-s-side">
        <img src={img} />
      </div>
    </div>
  );
};
