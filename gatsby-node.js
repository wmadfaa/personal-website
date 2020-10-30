/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createSchemaCustomization = ({ actions }) => {
  const resumeRelationsTypeDefs = `#graphql  
    type MarkdownRemark implements Node { 
        frontmatter: Frontmatter 
    }
    type Frontmatter {
        experience: MarkdownRemarkFrontmatterExperience
        education: MarkdownRemarkFrontmatterEducation
    }
    type MarkdownRemarkFrontmatterExperience {
        timeline: [MarkdownRemark] @link(by: "frontmatter.data_key")
    }
    type MarkdownRemarkFrontmatterEducation {
        timeline: [MarkdownRemark] @link(by: "frontmatter.data_key")
    }
`;
  const typeDefs = [resumeRelationsTypeDefs];
  actions.createTypes(typeDefs);
};

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`);

  // prettier-ignore
  const res = await graphql(`#graphql
    query {
      allMarkdownRemark(
        filter: { frontmatter: { template_key: { eq: "post" }, published: { eq: true } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  const posts = res.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: `${post.node.fields.slug}`,
      component: blogPostTemplate,
      context: {
        slug: `${post.node.fields.slug}`,
        previous,
        next,
      },
    });
  });
};
