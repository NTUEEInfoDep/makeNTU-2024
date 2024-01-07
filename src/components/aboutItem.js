import React from "react";
import Img from "gatsby-image";

const AboutItem = ({ feature }) => (
  <li className="">
    <div className="feature_section">
      <div className="feature item">
        <i className="feature__icon material-icons text-primary">
          {feature.icon}
        </i>
        <div className="feature__content">
          <h3 className="feature__title font-semibold mt-0">{feature.title}</h3>
          <p className="feature__text">{feature.description.description}</p>
        </div>
      </div>
      <div className="feature__image mx-auto">
        <Img fluid={feature.image.fluid} />
      </div>
    </div>
  </li>
);

export default AboutItem;
