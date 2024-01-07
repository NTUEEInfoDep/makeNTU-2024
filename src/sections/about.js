import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import AboutItem from "components/aboutItem";

const About = ({ contentModuleId }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulLayoutAbout {
        edges {
          node {
            id
            heading
            description {
              childContentfulRichText {
                html
              }
            }
            featureItem {
              id
              title
              icon
              description {
                description
              }
              image {
                title
                fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
                  ...GatsbyContentfulFluid_tracedSVG
                }
              }
            }
            image {
              fluid(quality: 100) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `);

  const content = data.allContentfulLayoutAbout.edges.find(
    (edge) => edge.node.id === contentModuleId
  );

  return (
    <section id="about" className="about-us bg-white pb-8">
      <div className="container section mx-auto pb-8">
        <div className="about-us__content">
          <h2 className="section__title">{content.node.heading}</h2>
          <div
            // data-sal="slide-up"
            // data-sal-easing="ease-in-cubic"
            // data-sal-delay="100"
            dangerouslySetInnerHTML={{
              __html: content.node.description.childContentfulRichText.html,
            }}
          >
            {/* {content.node.description.childContentfulRichText.html} */}
          </div>
        </div>
        {/* <div className="about-us__image">
          <div
            className="mx-auto about-us__image-wrap"
            // data-sal="slide-up"
            // data-sal-delay="200"
            // data-sal-duration="500"
          >
            <Img fluid={content.node.image.fluid} />
          </div>
        </div> */}
      </div>
      <div className="container feature_section mx-auto pb-8">
        <div className="about-us__features">
          {content.node.featureItem.length > 0 && (
            <ul className="md:ml-8">
              {content.node.featureItem.map((feature) => (
                <AboutItem feature={feature} key={feature.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

About.propTypes = {
  contentModuleId: PropTypes.string.isRequired,
};

export default About;
