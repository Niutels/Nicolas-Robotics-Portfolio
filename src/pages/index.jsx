import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import styles from "./index.module.css"
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Simpleimage from 'components/simpleimage';


const Index = ({ data }) => (
  <Layout>
{/*<div className={styles.user}>  
<div>*/}   <h2>{data.homeJson.content.childMarkdownRemark.rawMarkdownBody}</h2> 
<Gallery items={data.homeJson.gallery} />

    {/*<div style={{ height: '50vh' }} />*/}

  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }}
      nico_exo {
        link
        title
        copy
        image {
          publicURL
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      
      }
      gallery {
        link
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
