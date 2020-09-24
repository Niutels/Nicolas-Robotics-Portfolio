import React from 'react';
import { Link,graphql } from 'gatsby';
import Layout from 'components/layout';
import Simpleimage from 'components/simpleimage';
// import Simplepdf from 'components/pdf_link';

const PHD_controller = ({ data }) => (
  <Layout>
    <div>
    <h1> A human-like controller </h1>
    <Simpleimage singleitem={data.homeJson.PHD_controller_single} />
    <h2> Why do we care? </h2>
<ul>
<li>Need of a human model to test controllers on a
simulated Exoskeleton</li>
<li>Existing simulations for human bodies are
computationally expensive</li>
<li>Countless robotics applications for Human-robot simulated interactions</li>
<li>Improving robots haptics feedback</li>
<li>Understanding of human body dynamics</li>
</ul>
<h2> How would we do that? </h2>
A recent <a href="https://arxiv.org/abs/1809.10560"> study </a> done during the <Link to="/exoskeleton" style={{ textShadow: `none`, backgroundImage: `none` }}><p style={{ display: `inline` }}>exoskeleton project</p>
        </Link> had allowed to identify a model explaining how human body joints behave dynamically. The first thought which came to my mind when watching this happen was to replicate this feature into robots using this model as an inspiration!

More extensive reports and useful figures can be found below:
<ul>
{data.allFile.edges.map((file, index) => 
  { 
    return ( <li key={`pdf-${index}`}><a href={file.node.publicURL} download>{file.node.name}</a></li>)
  }
)}


</ul>
</div>
  </Layout>
);
export default PHD_controller;
export const PHDquery = graphql`
query PHDQuery {
    allFile(filter: { base: { in: ["a_theoretical_approach_L-CSS_and_ACC2021_submission.pdf","a_more_practical_approach_ICRA 2020_submission.pdf"] } }) 
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
