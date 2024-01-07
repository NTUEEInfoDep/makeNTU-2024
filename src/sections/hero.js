import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

const Hero = ({ contentModuleId }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulLayoutHero {
        edges {
          node {
            id
            heading
            subheading
            description {
              description
            }
            ctaText
            ctaUrl
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

  const content = data.allContentfulLayoutHero.edges.find(
    (edge) => edge.node.id === contentModuleId
  );

  return (
    <div className="hero__bg">
      <section className="hero container section mx-auto">
        <div className="hero__tagline">
          <div className="hero__transbox">
            <div className="hero__tagline-content-wrap">
              <h2 className="hero__tagline-title" data-sal="fade">
                <span className="hero__tagline-pretitle">2023 MakeNTU</span>
                <br />
                {/*<span className="hero__tagline-pretitle-image"></span>*/}
              </h2>
              <div className="hero__tagline-pretitle-image"></div>
              {content.node.subheading.split(" ").map((line) => {
                return (
                  <p
                    className="hero__tagline-subtitle"
                    data-sal="fade"
                    data-sal-delay="100"
                  >
                    {line}
                  </p>
                );
              })}

              <p
                className="hero__tagline-text"
                data-sal="fade"
                data-sal-delay="200"
              >
                {content.node.description.description}
              </p>
              <a href={content.node.ctaUrl}>
                <button
                  className="btn btn--primary text-lg mb-6 mt-8"
                  data-sal="fade"
                  data-sal-delay="300"
                >
                  {content.node.ctaText}
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Hero.propTypes = {
  contentModuleId: PropTypes.string.isRequired,
};

export default Hero;
