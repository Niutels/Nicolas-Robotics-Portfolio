import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Simpleimage from 'components/simpleimage';
import Video from "../components/video";

const robocup = ({ data }) => (
  <Layout>
  <div>
    <h1> RoboCup 2017 – Team project </h1>
    <div style={{ margin: `3rem auto`, maxWidth: 600, padding: `0 1rem` }}> 
    <Simpleimage singleitem={data.homeJson.robocup_single} />

    </div>
    <h4> A big robotics competition </h4>
    Initially solely standing for "Robot Soccer World Cup" in 1996, the RoboCup is become an international competition solving for human-centered autonomous behaviors. It is structured into 6 majors leagues and various subleagues which focus on topics such as playing soccer and providing assistance to humans in their home.
    <h4> Some numbers </h4>
    In 2017, the competition took place in Nagoya, Japan, where 50 countries were represented and a total of 500 participants were distributed between the existing leagues, each competing for first place in their own field! Below is a proud picture of our team, UT Austin Villa!
           <div style={{ margin: `3rem auto`, maxWidth: 600, padding: `0 1rem` }}> 
 <Simpleimage singleitem={data.homeJson.robocup_team} /> </div>
    <h4> Outcome </h4>
    We finished 3rd place! That was an amazing team effort, loved every second of it!
<Video
        videoSrcURL="https://www.youtube.com/embed/19GxZfZhyfM"
        videoTitle="demonstration"
      />
        <div style={{ margin: `3rem auto`, maxWidth: 600, padding: `0 1rem` }}> 
<Simpleimage singleitem={data.homeJson.robocup_prize} />
</div>

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
      robocup_team 
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
      robocup_prize 
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