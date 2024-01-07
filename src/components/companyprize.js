import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { right } from "inquirer/lib/utils/readline";
function WidthCalculator(ratio) {
  const scale = 20;
  return Math.floor(ratio * scale).toString() + "%";
}
function Strong_pt_Calculator(ratio) {
  const scale = 20;
  return Math.floor(scale).toString() + "%";
}
const CompanyPrize = ({ prize }) => (
  <div className="prize" style={{ paddingTop: "15px" }}>
    <div className="prize__content">
      <Img
        fluid={prize.image.fluid}
        className="prize__image2"
        style={{
          position: "absolute",
          width: WidthCalculator(prize.image.fluid.aspectRatio),
          height: `width` / `prize.image.fluid.aspectRatio`,
        }}
      />

      <strong
        className="prize__name"
        style={{
          paddingTop: Strong_pt_Calculator(prize.image.fluid.aspectRatio),
          fontSize: "150%",
          paddingBottom: "25px",
          marginLeft: "5%",
          marginRight: "5%",
          lineHeight: "40px",
        }}
      >
        {prize.title}
      </strong>
      {prize.description.content.map((item) => (
        <p
          className="prize__company text-secondary mb-4"
          style={{
            fontSize: "100%",
            marginRight: "5%",
            marginLeft: "5%",
          }}
        >
          {item.content[0].value}
        </p>
      ))}

      <div>
        <table className="prize__table">
          <tbody>
            {prize.scoring.scoring.map((item) => (
              <tr>
                <th style={{ textAlign: "right" }}>{item.name}:&nbsp;&nbsp;</th>
                <th style={{ textAlign: "left" }}>{item.percentage}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {prize.link ? (
        <a href={prize.link}>
          <button className="btn btn--primary mt-4 mb-0">完整內容</button>
        </a>
      ) : (
        <></>
      )}
    </div>
  </div>
);
//<i className="testimonial__comment text-sm">{testimonial.description}</i>
CompanyPrize.propTypes = {
  prize: PropTypes.object.isRequired,
};

export default CompanyPrize;
