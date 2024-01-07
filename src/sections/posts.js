import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { graphql, Link, useStaticQuery } from "gatsby";
import PostPreview from "components/postPreview";
import "../assets/css/layouts/posts.css";
import $ from "jquery";
import { ContactSupportOutlined } from "@material-ui/icons";

const Posts = ({ contentModuleId }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulLayoutPosts {
        edges {
          node {
            id
            heading
            description {
              description
            }
            posts {
              id
              title
              slug
              publishDate(formatString: "MMMM Do, YYYY")
              tags
              heroImage {
                title
                fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
                  ...GatsbyContentfulFluid_tracedSVG
                }
              }
              description {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
    }
  `);
  useEffect(() => {
    $(window).on("load", function () {
      console.log("window onload");
      $("#post__container").load(window.location.href + "#post__container");
      console.log("onload finished");
    });
  }, []);

  //   const ReloadPosts = function () {
  //     console.log("window onload");
  //     $("#post__container").load(window.location.href + " #post__container");
  //     console.log("onload finished");
  //   };
  const content = data.allContentfulLayoutPosts.edges.find(
    (edge) => edge.node.id === contentModuleId
  );
  return (
    <section id="posts" className="posts section bg-gray pt-8">
      <div className="container mx-auto" id="post__container">
        <h2 className="section__title text-center mb-12">
          {content.node.heading}{" "}
        </h2>
        <ul className="post-list mb-10">
          {content.node.posts &&
            content.node.posts.map((post) => {
              if (post.tags.includes("important")) {
                return (
                  <Link className="hover-red" to={`/post/${post.slug}`}>
                    <li className="mb-16" key={post.slug} id={post.slug}>
                      <PostPreview post={post} key={post.id} />
                    </li>
                  </Link>
                );
              }
              return (
                <Link className="hover" to={`/post/${post.slug}`}>
                  <li className="mb-8" key={post.slug} id={post.slug}>
                    <PostPreview post={post} key={post.id} />
                  </li>
                </Link>
              );
            })}
        </ul>
        <div style={{ position: "absolute", right: 0 }}>
          <Link to="/post">
            <button className="post-btn">
              <span>View More</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

Posts.propTypes = {
  contentModuleId: PropTypes.string.isRequired,
};

export default Posts;
