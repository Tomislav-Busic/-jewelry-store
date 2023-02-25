import React from "react";
import { ServicesSectionOne } from "../../Components/SERVICESSectionsComponents/ServicesSectionOne/ServicesSectionOne";
import { ServicesSectionThree } from "../../Components/SERVICESSectionsComponents/ServicesSectionThree/ServicesSectionThree";
import { ServicesSectionTwo } from "../../Components/SERVICESSectionsComponents/ServicesSectionTwo/ServicesSectionTwo";
import "./Services.scss";

export const Services = () => {
  return (
    <div className="work-page">
      <div className="container">
        <ServicesSectionOne />
        <ServicesSectionTwo />
        <ServicesSectionThree />
      </div>
    </div>
  );
};
