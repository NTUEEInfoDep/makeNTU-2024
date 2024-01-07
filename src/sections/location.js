import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Map from "components/map";
import Img from "gatsby-image";

const Location = ({ contentModuleId }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulLayoutLocation {
        edges {
          node {
            id
            heading
            description
            location {
              src
              width
              height
              frameborder
              allowfullscreen
              tableindex
            }
            images {
              fluid(maxWidth: 1180, background: "rgb:000000") {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `);

  const content = data.allContentfulLayoutLocation.edges.find(
    (edge) => edge.node.id === contentModuleId
  );

  return (
    <section id="location" className="section mx-auto pt-8">
      <div className="container mx-auto">
        <div className="mx-auto">
          <h2 className="text-center section__title mb-8">
            {content.node.heading}
          </h2>
          <h3 className="mx-auto text-center location__description">
            {content.node.description}
          </h3>
        </div>
        <div>
          <div className="iframe-rwd mx-auto">
            <Map feature={content.node.location} />
          </div>

          {content.node.images.map((image) => (
            <div className="location__image mx-auto">
              <Img fluid={image.fluid} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Location.propTypes = {
  contentModuleId: PropTypes.string.isRequired,
};

export default Location;
