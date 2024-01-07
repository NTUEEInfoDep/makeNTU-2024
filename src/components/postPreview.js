import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

import "../assets/css/components/postPreview.css";

const postPreview = ({ post }) => (
  <div className="preview">
    <Img
      className="preview-image"
      alt={post.heroImage.title}
      fluid={post.heroImage.fluid}
    />
    <h3
      className="font-medium previewTitle"
      style={{ marginTop: "0.5rem", marginBottom: "1rem" }}
    >
      {post.title}
    </h3>
    <p className="font-normal text-sm" style={{ color: "gray" }}>
      {post.publishDate}
    </p>
    <div
      dangerouslySetInnerHTML={{
        __html: post.description.content,
      }}
    />
    {post.tags &&
      post.tags.map((tag) =>
        tag === "important" ? (
          <p className="tag-red text-sm" key={tag}>
            {tag}
          </p>
        ) : (
          <p className="tag text-sm" key={tag}>
            {tag}
          </p>
        )
      )}
  </div>
);

postPreview.propTypes = {
  post: PropTypes.object.isRequired,
};

export default postPreview;
