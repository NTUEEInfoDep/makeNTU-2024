const path = require("path");

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    const layoutTemplate = path.resolve(`src/templates/pageTemplate.js`);
    const postTemplate = path.resolve(`src/templates/postTemplate.js`);
    const postListTemplate = path.resolve(`src/templates/postListTemplate.js`);
    return graphql(`
        query {
            allContentfulLayout {
                edges {
                    node {
                        slug
                    }
                }
            }
            allContentfulLayoutAllPosts {
                edges {
                    node {
                        posts {
                            title
                            slug
                        }
                    }
                }
            }
        }
    `).then((result) => {
        if (result.errors) {
            throw result.errors;
        }
        result.data.allContentfulLayout.edges.forEach((edge) => {
            if (edge.node.slug === "404") {
                // for 404 page we use custom page at src/pages/404.js
                return;
            } else if (edge.node.slug === "/") {
                createPage({
                    path: edge.node.slug,
                    component: layoutTemplate,
                    context: {
                        slug: edge.node.slug,
                    },
                });
            } else if (edge.node.slug === "post") {
                const posts = result.data.allContentfulLayoutAllPosts.edges[0].node.posts;
                const postsPerPage = 5;
                const numPages = Math.ceil(posts.length / postsPerPage);
                Array.from({ length: numPages }).forEach((_, i) => {
                    createPage({
                        path: i === 0 ? edge.node.slug : `${edge.node.slug}/${i + 1}`,
                        component: postListTemplate,
                        context: {
                            slug: "post",
                            limit: postsPerPage,
                            skip: i * postsPerPage,
                            numPages,
                            currentPage: i + 1,
                        },
                    });
                });
            }
        });

        result.data.allContentfulLayoutAllPosts.edges[0].node.posts.forEach((post) => {
            createPage({
                path: `/post/${post.slug}`,
                component: postTemplate,
                context: {
                    slug: post.slug,
                    layoutSlug: "post",
                },
            });
        });
    });
};
