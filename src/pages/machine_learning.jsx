import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Simpleimage from 'components/simpleimage';
// import Simplepdf from 'components/pdf_link';

const machine_learning = ({ data }) => (
  <Layout>
    <div>
    <h1> Machine learning – Class projects </h1>
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
export default machine_learning;
export const newquery = graphql`
  query MLQuery 
  {
    allFile(filter: { base: { in: ["Principal_Components_Analysis.pdf",
                                   "Gaussian_Process.pdf",
                                   "Independant_Components_Analysis.pdf",
                                   "Q-learning.pdf",
                                   "Backpropagation.pdf"] } }) 
    { 
      edges 
      { node 
        { publicURL
          name 
        } 
      } 
    }
  }
`;