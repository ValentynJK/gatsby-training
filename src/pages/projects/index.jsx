import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';
import * as styles from '../../styles/project.module.css'
import { GatsbyImage } from 'gatsby-plugin-image'

function Projects({ data }) {
  console.log(data)

  const projects = data.projects.nodes;
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've created</h3>
        <div className={styles.projects}>
          {
            projects.map(({ id, frontmatter }) => (
              <Link to={"/projects/" + frontmatter.slug} key={id}>
                <GatsbyImage image={frontmatter.thumb.childImageSharp.gatsbyImageData} alt={frontmatter.slug} />
                <div>
                  <h3>{frontmatter.title}</h3>
                  <p>{frontmatter.slug}</p>
                </div>

              </Link>
            ))
          }
        </div>
        <div>Contact me {data.contact.siteMetadata.email}</div>
      </div>
    </Layout>
  );
}

export default Projects;

export const query = graphql`
  query ProjectsPage {
  projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        title
        stack
        slug
        thumb {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      email
    }
  }
}
`