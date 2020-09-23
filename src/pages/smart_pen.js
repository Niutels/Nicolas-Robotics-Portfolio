import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Simpleimage from 'components/simpleimage';
// import Simplepdf from 'components/pdf_link';

const Smart_pen = ({ data }) => (
  <Layout>
    <div>
    <h1> Smart Pen – Numerize your 3D handwriting </h1>
    <Simpleimage singleitem={data.homeJson.smart_pen_single} />
    <h2> Why is it smart ? </h2>
     The pen I am going to show you doesn’t just copy what you write, it is able to recognize, to “understand” digits and letters written in the
air and to write it in a word file.
You will need a numeric software such as Matlab, an arduino board, an IMU and some pen-shaped material.   
<h2> Your computer needs to learn </h2>
  We first need to teach to the computer the symbols we want it to recognize, put it simply:
<ul>
  <li> The central unit is going to collect two types of data : linear acceleration and angular velocity.</li>
  <li> The arduino reads it, regulates it to get a fixed time base before sending the results to your computer.</li>
  <li> Matlab allows you to process it, to get a clean signal and associate it with a symbol.</li>
</ul>  
    <Simpleimage singleitem={data.homeJson.smart_pen_schema} />

<h2> Why linear acceleration and angular velocity ? </h2>
The goal is to make the pen as usable as possible : most of the time, precise position requires external sensors which interfere with a free and
convenient use of the pen. Moreover, the linear accelerations is sufficient to differentiate symbols. The angular velocity provides additional
informations about the direction of gravity which will be useful during the data process.
<h2> Why a fixed time base ? </h2>
The central unit sends data irregularly, which means that the data coming from the arduino is temporally disturbed and requests computing
time to adjust it. A fixed time base allows us to put this issue aside.
<h2>What is a clean signal ?</h2>
The acceleration signal used to teach the computer how to recognize a symbol needs to be particularly “clean” in order to be able to recognize
as many other symbols as possible. The more the acceleration signal matches the one you conveyed, the more the recognition efficiency will
increase.
In my example I calibrated the sensor, then I applied a low pass filter to get rid of most disturbances, I removed the gravity component by
using a Kalman filter to find its precise direction (by combining the data from the accelerometer with the data from the gyrometer) and finally
I set up a threshold system in order to avoid reading noises.
<h2>Write in 3D !</h2>
Now, to recognize what you are going to write we will use a Dynamic Time Warping algorithm which is simply going to compare the
signal resulting from your writing with the one you associated with a symbol previously. If those two are similar enough, it will finally be
written in a word file.
{/*   You can find a more extensive report attached : <Simplepdf node={data.allFile.edges.node} />
<p>{data.allFile.edges.node[0].name}</p>*/}
{/*You can find a more extensive report attached : <Simplepdf node={data.allFile.edges} />*/}
A more extensive report and useful figures can be found in the link below:
{data.allFile.edges.map((file, index) => 
  { 
    return ( <p key={`pdf-${index}`}><a href={file.node.publicURL} download>Smart pen report</a></p>)
  }
)}
</div>
  </Layout>
);
export default Smart_pen;
export const newquery = graphql`
  query SmartPenQuery {
    allFile(filter: { base: { eq: "PJE.pdf" } }) 
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
      smart_pen_single 
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
      smart_pen_schema
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