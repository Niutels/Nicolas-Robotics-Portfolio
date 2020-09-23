import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Simpleimage from 'components/simpleimage';
// import Simplepdf from 'components/pdf_link';

const PHD_controller = ({ data }) => (
  <Layout>
    <div>
    <h1> A human-like controller </h1>
    <Simpleimage singleitem={data.homeJson.PHD_controller_single} />
    <h2> Why is it smart ? </h2>

{/*   You can find a more extensive report attached : <Simplepdf node={data.allFile.edges.node} />
<p>{data.allFile.edges.node[0].name}</p>*/}
{/*You can find a more extensive report attached : <Simplepdf node={data.allFile.edges} />*/}
A more extensive report and useful figures can be found in the link below:
{data.allFile.edges.map((file, index) => 
  { 
    return ( <p key={`pdf-${index}`}><a href={file.node.publicURL} download>L-CSS / ACC 2021 submission</a></p>)
  }
)}
</div>
  </Layout>
);
export default PHD_controller;
export const PHDquery = graphql`
query PHDQuery {
  allFile(filter: { base: { eq: "L-CSS_ACC_2021.pdf" } }) 
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
    PHD_controller_single 
    {
      link
      title
      copy
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