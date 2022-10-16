import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from '../styles/project-details.module.css'
import Layout from '../components/Layout';
// import { query } from '../pages/projects';
import { graphql } from 'gatsby';

function ProjectDetails({ data }) {

  console.log(data)
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <GatsbyImage image={featuredImg.childImageSharp.gatsbyImageData} />
        </div>
        <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
}

export default ProjectDetails;

export const query = graphql`
  query ProjectDetails($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    id
    html
    frontmatter {
      stack
      title
      featuredImg {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}

`