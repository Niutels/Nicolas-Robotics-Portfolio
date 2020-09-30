import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Simpleimage from 'components/simpleimage';
import styles from "./index.module.css"

const Contact = ({ data }) => (
  <Layout>
    <div style={{ margin: `3rem auto`, maxWidth: 600, padding: `0 1rem` }}> 

    {/*<h1>{data.homeJson.title}</h1>*/}
        <div class={styles.centered}>
        <div class={styles.centered}>
    <Simpleimage singleitem={data.homeJson.contact} />
        </div>
    I love robots and I'd love to talk, let's grab this virtual coffee! 
<p>    Join me anytime at (512) 650 6359 </p>
<p>and/or</p> <p> at brissonneau.nicolas@gmail.com </p>
</div>
  {/*  {data.allFile.edges.map((file, index) => 
  { 
    return ( <h3 key={`pdf-${index}`}><a href={file.node.publicURL} download>Resume</a></h3>)
  }
)}*/}
     </div>
  </Layout>
);

export default Contact;

export const contactquery = graphql`
query ContactQuery 
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

  homeJson       
  {
    title
    contact 
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
