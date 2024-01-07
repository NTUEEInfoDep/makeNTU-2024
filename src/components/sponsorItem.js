import React from "react";
import Img from "gatsby-image";

const SponsorItem = ({ href, fluid }) => (
  <div className="my-auto">
    <a href={href}>
      <Img fluid={fluid} />
    </a>
  </div>
);

export default SponsorItem;
