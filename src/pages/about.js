import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Simpleimage from 'components/simpleimage';
import styles from "./index.module.css"

const About = ({ data }) => (
  <Layout>
    <div style={{ margin: `3rem auto`, maxWidth: 600, padding: `0 1rem` }}> 
    <Simpleimage singleitem={data.aboutJson.mypicture} />
     </div>

    {/*<h1>{data.aboutJson.title}</h1>*/} 
    <div class={styles.myDiv}>
    Hey I'm Nico, a 27 y.o. French-American robotics engineer freshly graduated from UT Austin. 
    I crave to see more robots assisting humans and I believe there is only one way I can help with this: 
    by helping bringing robots to market. Very curious by nature, I feel at ease with both hardware and simulations 
    and am heavy on the famous ROS/c++/python combo, please feel free to shoot me an email if you're getting curious too!
    </div>
    {data.allFile.edges.map((file, index) => 
  { 
    return ( <h3 key={`pdf-${index}`}><a href={file.node.publicURL} download>Resume</a></h3>)
  }
)}
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
