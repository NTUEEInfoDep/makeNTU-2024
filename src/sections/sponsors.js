import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import SponsorItem from "components/sponsorItem";

const Sponsors = ({ contentModuleId }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulLayoutSponsors {
        edges {
          node {
            id
            subtitle1
            imageOrganizers {
              fluid(quality: 100, maxWidth: 208, maxHeight: 146) {
                ...GatsbyContentfulFluid
              }
              description
            }
            subtitle2
            imageCoOrganizers {
              fluid {
                ...GatsbyContentfulFluid
              }
              description
            }
            subtitle3
            image_sponsors {
              fluid {
                ...GatsbyContentfulFluid
              }
              description
            }
          }
        }
      }
    }
  `);

  const content = data.allContentfulLayoutSponsors.edges.find(
    (edge) => edge.node.id === contentModuleId
  );
  return (
    <section id="sponsors" className="section bg-gray mx-auto">
      <div className="container mx-auto">
        <div className="mx-auto">
          <h2
            className="section__title text-center mb-16"
            data-sal="fade"
            data-sal-easing="ease-in-cubic"
          >
            {content.node.subtitle1}
          </h2>
        </div>
        <div
          className="mx-auto organizer"
          data-sal="fade"
          data-sal-delay="100"
          data-sal-easing="ease-in-cubic"
        >
          {content.node.imageOrganizers.map((sponsor) => (
              <SponsorItem href={sponsor.description} fluid={sponsor.fluid} />
            ))}
        </div>
        <br />
        <div className="mx-auto">
          <h2
            className="section__title text-center mb-16"
            data-sal="fade"
            data-sal-delay="200"
            data-sal-easing="ease-in-cubic"
          >
            {content.node.subtitle2}
          </h2>
        </div>
        <div
          className="mx-auto coorganizers gap-12 padding"
          data-sal="fade"
          data-sal-delay="300"
          data-sal-easing="ease-in-cubic"
        >
          {content.node.imageCoOrganizers.map((sponsor) => (
              <SponsorItem href={sponsor.description} fluid={sponsor.fluid} />
            ))}
        </div>
        <br />
        <div className="mx-auto">
          <h2
            className="section__title text-center mb-16"
            data-sal="fade"
            data-sal-delay="400"
            data-sal-easing="ease-in-cubic"
          >
            {content.node.subtitle3}
          </h2>
        </div>
        <div
          className="mx-auto sponsors gap-12 padding"
          data-sal="fade"
          data-sal-delay="500"
          data-sal-easing="ease-in-cubic"
        >
          {content.node.image_sponsors.map((sponsor) => (
              <SponsorItem href={sponsor.description} fluid={sponsor.fluid} />
            ))}
        </div>
      </div>
    </section>
  );
};

Sponsors.propTypes = {
  contentModuleId: PropTypes.string.isRequired,
};

export default Sponsors;
