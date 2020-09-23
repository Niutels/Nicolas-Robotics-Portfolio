import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Simpleimage from 'components/simpleimage';
import Video from "../components/video"

const AGV = ({ data }) => (
  <Layout>
  <div>
    <h1> Line tracking for a moving robot </h1>
    <Simpleimage singleitem={data.homeJson.AGV_single} />
    <h2> Why line tracking ? </h2>
    Here we are going to learn how to use a camera to follow a line drawn on the floor. Let’s say that you want to conceive an autonomous
robot but you’re not ready to use mapping technologies to guide it yet. Then line tracking would be a nice and simple way to test your robot.
To track lines, you will need a camera and a numeric software such as Matlab or Labview.
<h2>See the line</h2>
<ul>
  <li>Step 1 : Get a picture</li>
You can either take a picture or directly establish streaming, it’s up to you.
    <Simpleimage singleitem={data.homeJson.AGV_t1} />
Get a picture of your line
<li> Step 2 : Get access to the RGB data </li>
RGB (Red Green Blue) are 3 indexes of a pixel’s colour, usually each is defined from 0 to 255. You will need to get the RGB code of every
pixel of your screen and read the average RGB value of the line you want to track.
For example, perfect red is [255 , 0 , 0], perfect green is [0 , 255 , 0] and a mix would look like [125 , 125 , 0].
    <Simpleimage singleitem={data.homeJson.AGV_t2} />

“Read” your line’s RGB code
<li>Step 3 : Get the coordinates of the pixels</li>
Now that you know the colour indexes you’re looking for, you can get the coordinates of all the pixels whose RGB values match with your
line.
    <Simpleimage singleitem={data.homeJson.AGV_t3} />
Consider each pixel as its coordinates
Unfortunately, it is very rare that a single RGB measure matches the entire line so you can introduce a threshold admission to be sure of it.
For example if two pixels of your red line are respectively corresponding to RGB = [240 , 5 , 2]
and RGB = [251 , 15 , 1], you may choose all the pixels whose RGBs are defined between [245±5 , 10±5 , 1].
    <Simpleimage singleitem={data.homeJson.AGV_t4} />

Select the coordinates
<li>Step 4 : See the line</li>
Compute the coefficients of the least square line associated to the pixel coordinates you’ve found.
    <Simpleimage singleitem={data.homeJson.AGV_t5} />

<h2>Track the line</h2>
<li>Step 1 : Define what you are looking for</li>
Usually, you need to follow the line straight, which means you want to keep the line centered and vertical. In order to regulate it you will
need :
The distance between the line and the center of the screen D.
D=(|a*xcenter + b*ycenter +c|)/((a2+b2)^(1/2))
The orientation of the line α.
α = atan(-a/b)
<li>Step 2 : Implement automatic control</li> </ul>
Depending on your robot/vehicle, you will need to implement different automatic controls to monitor your motors.
For “classical” applications such as wheeled robots you can configure it at low speed by implementing a Full State Feedback if you can
model your system and get the following State space equations. The LQ controller fits particularly well here.
{/*{\dot {\underline {x}}}=\mathbf {A}
{\underline {x}}+\mathbf {B}
{\underline {u}};
State equation
{\underline {y}}=\mathbf {C}
{\underline {x}}+\mathbf {D}
{\underline {u}}*/}
Measurement equation
Where x is a state vector, y is the output vector and u is the control vector. In this case y represents our motors inputs,
u includes D and α, and x may correspond to y and other variables you want to estimate in your model.
However if you are not familiar with State Feedbacks, you can also implement a simple feedback loop with an adjusted proportional gain, it
will already work just fine but you will still have to regulate the weighting between the distance factor D and the orientation
factor α depending on your system performances against it.
Here is an example of a line tracking establishment I achieved at AKEOPLUS:
      <Video
        videoSrcURL="https://www.youtube.com/embed/htx5c2Kiee0"
        videoTitle="Akeomotion demo"
      />
</div>
  </Layout>
);
export default AGV;
export const newquery = graphql`
  query AGVQuery {
    homeJson 
    {
      AGV_single 
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
      AGV_t1 
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
      AGV_t2 
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
      AGV_t3 
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
      AGV_t4 
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
      AGV_t5 
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