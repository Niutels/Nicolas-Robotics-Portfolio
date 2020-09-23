import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Simpleimage from 'components/simpleimage';
import Video from "../components/video";

const robocup = ({ data }) => (
  <Layout>
  <div>
    <h1> RoboCup 2017 – Team project </h1>
    <Simpleimage singleitem={data.homeJson.robocup_single} />
    <h4> A big robotics competition </h4>
    Initially solely standing for "Robot Soccer World Cup" in 1996, the RoboCup is become an international competition solving for human-centered autonomous behaviors. It is structured into 6 majors leagues and various subleagues which focus on topics such as playing soccer and providing assistance to humans in their home.
    <h4> Some numbers </h4>
    In 2017, the competition took place in Nagoya, Japan, where 50 countries were represented and a total of 500 participants were distributed between the existing leagues, each competing for first place in their own field!

<Video
        videoSrcURL="https://www.youtube.com/embed/19GxZfZhyfM"
        videoTitle="demonstration"
      />
<h2>Big event</h2>


</div>
  </Layout>
);
export default robocup;
export const robocupquery = graphql`
  query robocupQuery {
    homeJson 
    {
      robocup_single 
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
    }
  }
`;