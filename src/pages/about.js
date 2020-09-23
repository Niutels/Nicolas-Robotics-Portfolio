import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Simpleimage from 'components/simpleimage';


const About = ({ data }) => (
  <Layout>
    <div> <h1>{data.aboutJson.title}</h1>
    <Simpleimage singleitem={data.aboutJson.mypicture} />
    Hey I'm Nico, I love robots and I'd love to talk, let's grab a coffee! 
     </div>
  </Layout>
);

export default About;

export const aboutquery = graphql`
query AboutQuery 
{
  aboutJson       
  {
    title
    mypicture 
    {
      image 
      {
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
