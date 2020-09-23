import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Simpleimage from 'components/simpleimage';
import Video from "../components/video"

      
const painting_robot = ({ data }) => (
  <Layout>
  <div>
  <Video
        videoSrcURL="https://www.youtube.com/embed/u6k4HucUqpA"
        videoTitle="demonstration"
      />
    <h1> Summary of the design and implementation </h1>
    <h2>Motivation for the work of Summer 2020</h2>
We want to provide a solution for mimicking human operators
manipulating spraying cans and cleaning materials, we have the robotic
arm Scorpio designed by Apptronik and a gripper from Robotiq at our
disposal. The initial intent here is to provide a working demonstration in a
delay of 3 months, paving the way to more advanced human-like trajectory
tracking in the future.
    <Simpleimage singleitem={data.homeJson.painting_robot_1} />
<h2>Design context</h2>
    <Simpleimage singleitem={data.homeJson.painting_robot_2} />
Above are three potential configurations to use the spraying can, we
notice that the main means of assembly for the interface we plan to add are
two planar surfaces at the base of the gripper, with an additional cylindrical
surface to support the structure radially.
While it is possible to design an independently actuated assembly to
activate the spraying (arduino/raspberry pi + actuator + power), we want to
minimize the complexity of the assembled system and final software. The
philosophy behind the proposed design is to limit the number of interfacing
components and to maximize the use of the assets we already have with
the existing parts. In short we want a very practical solution with little
design, production and assembly complexity.
We have started envisioning the use of gun-shaped devices to
interface the gripper with the can as the trigger is a good fit for the gripper’s
grasping capabilities. We have thus ordered two models, a can-gun1 2012
and a 3M Accuspray Spray Gun Kit HPG shown below.
    <Simpleimage singleitem={data.homeJson.painting_robot_3} />

<h2>Assembly idea</h2>
    <Simpleimage singleitem={data.homeJson.painting_robot_4} />
Using the gripper’s base surfaces, we would attach two supporting
parts (blue) which place the device’s handle within reach of the gripper’s
“fingers” and a locking part (green) would fix and rigidify the assembly.
However, the scale of such spraying devices require better fitting parts.
    <Simpleimage singleitem={data.homeJson.painting_robot_5} />

<h2>Adaptable interface with mold-like design:</h2>
Photogrammetry process (Meshroom):
<ul>
  <li>
		Take pictures of an object
		    <Simpleimage singleitem={data.homeJson.painting_robot_6} />

  </li>
  <li>
		Identify features from the object which appear in several pictures

  </li>
  <li>
		From the identified features, derive a guess of the camera positions
for each picture
  </li>
  <li>
		Infer the 3d location of the object’s features
	    <Simpleimage singleitem={data.homeJson.painting_robot_7} />
  </li>
  <li>
		Infer a mesh based on the 3d points found
	    <Simpleimage singleitem={data.homeJson.painting_robot_8} />
        <Simpleimage singleitem={data.homeJson.painting_robot_9} />
  </li>
</ul>
Mesh editing (Meshlab):
<ul>
  <li>
		Trimming
  </li>

  <li>
		Mesh simplification
  </li>

  <li>
		Surface smoothing
  </li>
  <Simpleimage singleitem={data.homeJson.painting_robot_10} />

</ul>
Mesh editing (Blender):
<ul>
  <li>
	  Import mold-like surfaces
      <Simpleimage singleitem={data.homeJson.painting_robot_11} />
  </li>  
  <li>
		Add volume
      <Simpleimage singleitem={data.homeJson.painting_robot_12} />

  </li>
  <li>
	  Smoothen irregularities
      <Simpleimage singleitem={data.homeJson.painting_robot_13} />

  </li>
</ul>
Use in assembly​ :
<ul>
	<li>
		Add support surface
	</li>
	<li>
		Adapt for assembly
      <Simpleimage singleitem={data.homeJson.painting_robot_14} />
	</li>		
	<li>
		Generate interfacing parts
      <Simpleimage singleitem={data.homeJson.painting_robot_15} />

		<ul>
			<li>
				It will be printed, 3d printing guidelines should especially be
				kept in mind for this design
			</li>
			<li>
				Surface contact constraints locate parts with respect to each
				other, while screws and nuts fix the assembly (they are never
				meant to position parts as this would lead to a non-repeatable
				and mechanically weak/unsafe assembly)
			</li>
			<li>
				Curves are almost always good mechanically speaking
			</li>
		</ul>
	</li>
	<li>
		Assemble everything
      <Simpleimage singleitem={data.homeJson.painting_robot_16} />

	</li>
	<li>
		Iterate the design until the assembly is satisfying
      <Simpleimage singleitem={data.homeJson.painting_robot_17} />

	</li>
</ul>
3d printing (Cura):
      <Simpleimage singleitem={data.homeJson.painting_robot_18} />

<ul>
	<li>
	Avoid overhangs in your design when possible, by using angles
	smaller than 45 degrees.</li>
	<li>
	Avoid large flat surfaces and use rounded corners to avoid warping.below.
	</li>
	<li>
	Decide what is the minimum level of detail your models require and
	choose a 3D printing process accordingly.
	</li>
	<li>
	Cylindrical holes’ axis should be as perpendicular to the printing
	surface as possible
	</li>
	<li>
	3d printers do print layer one above the other, so the main
	mechanical weakness of a 3d printed part is between each printed
	plane (avoid stressing the part in the plane parallel to the printing
	surface or adjust the density)</li>
	<li>
	Remember to calibrate your printer every now and then to avoid accidents
	</li>
      <Simpleimage singleitem={data.homeJson.painting_robot_19} />

</ul>
<h2>Preliminary assembly and testing</h2>
For the first test the arm was not moved, only the gripper was
activated to test the spraying and an Evian spray can was used as it’s a
safe cosmetics product. Electronics exposure seemed negligible in this
configuration, but ... better safe than sorry. It worked well.
  <Simpleimage singleitem={data.homeJson.painting_robot_20} />

<h2>Solution for including cleaning material</h2>
<ul>
	<li>Add flat top surface to previously designed parts</li>
      <Simpleimage singleitem={data.homeJson.painting_robot_21} />
	<li>Add gripping components with various interchangeable frictions
	plates for different cleaning materials to grip to</li>
      <Simpleimage singleitem={data.homeJson.painting_robot_22} />
	<li>Print and test</li>
      <Simpleimage singleitem={data.homeJson.painting_robot_23} />
</ul>
<h2>Simulation with PnC:</h2>
<ul>
	<li>
		Adding visualization of the can and spray direction
	</li>
	<li>
		Creating simple end-effector trajectories in operational space from
		within the gazebo plugin with
		<ul>
			<li>
				Relative and absolute pose control
			</li>
			<li>
				Duration specification
			</li>
		</ul>
      <Simpleimage singleitem={data.homeJson.painting_robot_24} />
	</li>
</ul>

</div>
  </Layout>
);
export default painting_robot;
export const painting_robotquery = graphql`
query painting_robotQuery {
    homeJson 
    {
		painting_robot_single 
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
      painting_robot_2
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

      painting_robot_3
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

      painting_robot_4
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

      painting_robot_5
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

      painting_robot_6
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

      painting_robot_7
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

      painting_robot_8
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

      painting_robot_9
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

      painting_robot_10
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

      painting_robot_11
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

      painting_robot_12
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

      painting_robot_13
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

      painting_robot_14
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

      painting_robot_15
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

      painting_robot_16
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

      painting_robot_17
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

      painting_robot_18
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

      painting_robot_19
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

      painting_robot_20
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

      painting_robot_21
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

      painting_robot_22
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

      painting_robot_23
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

      painting_robot_24
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