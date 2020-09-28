import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Simpleimage from 'components/simpleimage';

const About = ({ data }) => (
  <Layout>
    <div style={{ margin: `3rem auto`, maxWidth: 600, padding: `0 1rem` }}> 

    <h1>{data.aboutJson.title}</h1>
    <Simpleimage singleitem={data.aboutJson.mypicture} />
    Hey I'm Nico, I love robots and I'd love to talk, let's grab a coffee! 
<p>    Join me anytime at (512) 650 6359 </p>
<p>and/or at brissonneau.nicolas@gmail.com </p>
    {data.allFile.edges.map((file, index) => 
  { 
    return ( <h3 key={`pdf-${index}`}><a href={file.node.publicURL} download>Resume</a></h3>)
  }
)}
     </div>
  </Layout>
);

export default About;

export const aboutquery = graphql`
query AboutQuery 
{
    allFile(filter: { base: { in: ["CV Nicolas BRISSONNEAU_v2.pdf"] } }) 
  { 
    edges 
    { node 
      { publicURL
        name 
      } 
    } 
  }

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
