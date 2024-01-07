import React from "react";
import PropTypes from "prop-types";

import About from "sections/about";
import Prizes from "sections/prizes";
import Contact from "sections/contact";
import Hero from "sections/hero";
import Timeline from "sections/timeline";
import PageNotFound from "sections/pageNotFound";
import Posts from "sections/posts";
// import Sponsors from "sections/sponsors";
import Location from "sections/location";
// import Pricing from "sections/pricing";
// import Services from "sections/services";
// import Testimonials from "sections/testimonials";

// Dynamically import or require sections inside the section folder
const components = {
  About,
  Posts,
  Prizes,
  Timeline,
  Location,
  // Sponsors,
  // Contact,
  PageNotFound,
  Hero,
  // Testimonials,
  // Services,
  // Pricing,
};

const Section = ({ contentModuleId, type }) => {
  const component = type.split("Layout")[1];

  if (typeof components[component] === "undefined") {
    return "";
  }

  return React.createElement(components[component], {
    contentModuleId,
  });
};

Section.prototype = {
  contentModuleId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Section;
