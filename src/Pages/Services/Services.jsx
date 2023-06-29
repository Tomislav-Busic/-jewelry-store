import React from "react";
import { ServicesSectionOne } from "../../components/servicesSectionsComponents/servicesSectionOne/ServicesSectionOne";
import { ServicesSectionThree } from "../../components/servicesSectionsComponents/servicesSectionThree/ServicesSectionThree";
import { ServicesSectionTwo } from "../../components/servicesSectionsComponents/servicesSectionTwo/ServicesSectionTwo";
import "./services.scss";

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
