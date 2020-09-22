import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Simpleimage from 'components/simpleimage';

const kinect = ({ data }) => (
  <Layout>
  <div>
    <h1> Simple obstacle detection with kinect </h1>
    <h2> Continuous 3D detection </h2>
The Kinect camera is a distance sensor, it has an angular field of view which means that the coordinates are given through
a spherical system. You may keep it that way, but to make it easier to visualize you can also convert it to a Cartesian system.
You will need a Kinect camera and a numeric software such as Matlab or Labview.
    <Simpleimage singleitem={data.homeJson.kinect_single} />

<h2>Create your map</h2>
Let’s say that, if the camera spots an object with the (X,Y,Z) coordinates, it prints it on a map at the said location. Then by showing a wall to
the camera, depending on the resolution, the data will look like this :
<Simpleimage singleitem={data.homeJson.kinect_3d_mapping_wall} />
However, if someone had walked in front of the camera, then it would have looked like this :
<Simpleimage singleitem={data.homeJson.kinect_walk_infront} />
<h2>Can we unsee what has been seen ?</h2>
The issue here is that we can’t “unsee” what has been seen even if it’s long gone. This is why we need to use the Bresenham algorithm’s
principle.
Bresenham algorithm's principle : For two points P1 and P2, we search for the cases which are crossed by the [P1;P2] segment.
Here, P1 is the Kinect camera and P2 is a dot on the wall. This method gives us the “free space” (crossed cases) between the camera and the
wall, so it helps us clear the areas which are empty.
<Simpleimage singleitem={data.homeJson.bresenham} />
<h2>Can it be trusted yet ?</h2>
We now have a continuous mapping, however its efficiency is questionable. Indeed, the Kinect camera only “believes” in what it is seeing
right now, which is an issue when you consider its malfunctions and low accuracy. Here is an example of what we are supposed to find by
implementing this method alone :
    <Simpleimage singleitem={data.homeJson.kinect_malfunctions} />
The spot on the left comes from the Kinect camera which may find
incoherent data such as nul distances. To improve our mapping, we are going to use Cauchy distribution.
First of all, we may consider a Normal distribution which reflects our uncertainty about the precise location of the obstacle. Here is an
example of an obstacle seen at 12 meters from the camera and its associated normal distribution to consider the [11,5 ; 12,5] range.
    <Simpleimage singleitem={data.homeJson.kinect_prob_seen} />

Then we may add a cumulative distribution function which will behave as a gauge of confidence : the more an obstacle is seen, the more
it is trusted. Thus a wall will be hard to remove from the map but a walking person won’t be. Moreover, malfunctions are mostly erased
and the accuracy is improved.
    <Simpleimage singleitem={data.homeJson.kinect_confidence} />
Finally, the outcome is really good, but the map is limited to an area of your room because you can’t move the camera. If you are interested
in a more advanced 3D mapping you may want to assemble a motor, allowing the camera to rotate at constant rate and pursue the 3D
mapping.

</div>
  </Layout>
);
export default kinect;
export const kinectquery = graphql`
  query KinectQuery {
    homeJson 
    {
      kinect_single 
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
      kinect_walk_infront
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
      kinect_prob_seen
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
      kinect_malfunctions
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
      kinect_confidence
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
      kinect_3d_mapping_wall
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
      bresenham
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