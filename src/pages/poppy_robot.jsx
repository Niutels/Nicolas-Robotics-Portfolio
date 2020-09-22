import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Simpleimage from 'components/simpleimage';

const poppy_robot = ({ data }) => (
  <Layout>
  <div>
    <h1> Standing humanoïd robot : The Poppy Challenge – Team project </h1>
    <Simpleimage singleitem={data.homeJson.poppy_robot_single} />
    <h2> What kind of challenge is it ?</h2>
    The Poppy Challenge is a four months long competition organized by Dassault Systemes, the goal is to keep the robot standing on
his feet and make him able to resist small disturbances such as pats/slaps. To implement a control law, we are allowed to use the famous 3D
printed robot Poppy which is proportionally sized like a human.
We have access to the robot’s ankles and hips which are equipped with servo-motors, thus we may consider an analogy with the double
reverse pendulum.
poppy-robot-pendulum
Poppy robot – model
Equation
Equation of the double reverse pendulum’s dynamic
M is the mass matrix - C corresponds to the Coriolis terms - g represents gravity
τ is the motors' torque vector - q=[α1,α2] matches with hips and ankles angles
As it appears on the figure above, we need to keep our angles set on π/2 to stand straight in this plane problem. To achieve the challenge, we
can monitor our motors’ torques and get their position as a feedback.
<Simpleimage singleitem={data.homeJson.poppy_twodof} />
<h2> Control law </h2>
<h3>PID control</h3>
The PID control is by far the most commonly used control law. It is quite simple to configure and even if it is not optimized it still works
well if the system is not too complex. It has 3 main performance criteria : robustness, speed and accuracy.
However, even if it may seem easy to implement a control law here, we should be careful about the hypothesis we make. Poppy has got 2
legs, 1 chest and 2 arms, so considering it as a plane problem will definitely decrease our control law robustness.
<h3>LQ control</h3>
The Linear Quadratic control law distinguishes from PID control by defining a single criterion performance which is a function of each
variable involved. Not only does it take each variable into account, but also their interdependencies. For this reason, the LQ control focuses
more on the system’s robustness than its accuracy and speed.
To apply the analogy of the double reverse pendulum, we must consider the robustness as the main issue. Plus, accuracy and speed are not
relevant in the challenge so we choose to implement the LQ control.
<h2>The 3DExperience</h2>
Dassault Systemes shared the 3DExperience with us. It is a tool designed to answer the needs of the industry 4.0, it includes advanced
versions of several well-known CAD softwares such as Catia and Solidworks.
system
<h2>3DS Model</h2>
We used it to implement the LQ control law we designed on Matlab. Then we had access to the robot through the software and we were able
to test our automatic control in real time on Poppy. To avoid any injury during the tests, Poppy’s feet were fixed and his chest had a safety
cord.
You can find the results of my winning team here :    

</div>
  </Layout>
);
export default poppy_robot;
export const newquery = graphql`

  query PoppyQuery {
    homeJson 
    {
      poppy_robot_single 
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
      poppy_twodof
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