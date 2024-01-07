import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

const Footer = ({ menus }) => {
  const data = useStaticQuery(graphql`
    query {
      contentfulContactDetails {
        contactInfo
        id
        addressLine1
        addressLine2
        email
        menuLinks
        followUs
        facebookUrl
        gitHubUrl
        youTubeUrl
      }
    }
  `);

  const footerMenu =
    menus !== null && menus !== undefined
      ? menus.find((menu) => menu.type === "secondary")
      : null;

  return (
    <footer className="footer bg-tertiary text-white">
      <div className="container section mx-auto py-10">
        <div id="contact" className="footer__content">
          <h3 className="text-lg font-bold mb-4 text-lightGray">
            {data.contentfulContactDetails.contactInfo}
          </h3>
          <ul className="text-sm">
            {data.contentfulContactDetails.addressLine1 ? (
              <li className="mb-2">
                <div className="item">
                  <i
                    className="item__icon material-icons text-lightGray text-2xl"
                    style={{ color: "white" }}
                  >
                    business
                  </i>
                  <div className="item__content">
                    <p className="item__text">
                      {data.contentfulContactDetails.addressLine1}
                      <br />
                      {data.contentfulContactDetails.addressLine2}
                    </p>
                  </div>
                </div>
              </li>
            ) : (
              <li />
            )}
            {data.contentfulContactDetails.contactNumber ? (
              <li className="mb-2">
                <div className="item">
                  <i
                    className="item__icon material-icons text-lightGray text-2xl"
                    style={{ color: "white" }}
                  >
                    settings_phone
                  </i>
                  <div className="item__content">
                    <p className="item__text">
                      {data.contentfulContactDetails.contactNumber}
                    </p>
                  </div>
                </div>
              </li>
            ) : (
              <li />
            )}
            {data.contentfulContactDetails.email ? (
              <li className="mb-2">
                <div className="item">
                  <i
                    className="item__icon material-icons text-lightGray text-2xl"
                    style={{ color: "white" }}
                  >
                    email
                  </i>
                  <div className="item__content">
                    <p className="item__text">
                      {data.contentfulContactDetails.email}
                    </p>
                  </div>
                </div>
              </li>
            ) : (
              <li />
            )}
          </ul>
        </div>
        {footerMenu !== null && footerMenu !== undefined && (
          <div className="footer__content">
            <h3 className="text-lg font-bold mb-4 text-lightGray">
              {data.contentfulContactDetails.menuLinks}
            </h3>
            <ul className="text-sm">
              {footerMenu.menuItems.map((menu) => (
                <li className="mb-2" key={menu.id}>
                  <a className="hover:text-primary" href={menu.url}>
                    {menu.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="footer__content">
          <h3 className="text-lg font-bold mb-4 text-lightGray">
            {data.contentfulContactDetails.followUs}
          </h3>
          <ul className="flex text-sm">
            <li className="mb-2 mr-4">
              <a href={data.contentfulContactDetails.facebookUrl}>
                <img
                  className="w-6 h-6"
                  // src={require("assets/images/GitHub-Mark-Light-120px-plus.png")}
                  src={require("assets/images/facebook.svg")}
                  alt="Facebook Icon"
                />
              </a>
            </li>
            <li className="mb-2 mr-4">
              <a href={data.contentfulContactDetails.gitHubUrl}>
                <img
                  className="w-6 h-6"
                  src={require("assets/images/GitHub-Mark-Light-120px-plus.png")}
                  alt="GitHub Mark"
                />
              </a>
            </li>
            <li className="mb-2 mr-4">
              <a href={data.contentfulContactDetails.youTubeUrl}>
                <img
                  className="w-6 h-6"
                  src={require("assets/images/youtube_social_circle_white.png")}
                  alt="YouTube Icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  menus: null,
};

Footer.propTypes = {
  menus: PropTypes.any,
};

export default Footer;
