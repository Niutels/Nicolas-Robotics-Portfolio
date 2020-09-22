import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Simpleimage from 'components/simpleimage';

const robocup = ({ data }) => (
  <Layout>
  <div>
    <h1> RoboCup 2017  </h1>
    <h2> Nagoya Japan </h2>
    <Simpleimage singleitem={data.homeJson.robocup_single} />

<h2>Big event</h2>


</div>
  </Layout>
);
export default robocup;
export const robocupquery = graphql`
  query robocupQuery {
    homeJson 
    {
      robocup_single 
      {
        link
        title
        copy
        image {
          childImageSharp 
          {
            fluid(maxWidth: 2000, quality: 90) 
            {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;