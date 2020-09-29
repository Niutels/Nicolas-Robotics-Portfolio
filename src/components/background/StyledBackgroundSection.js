import React from 'react';

import { graphql,StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
const BackgroundSection = ({ className }) => (
  <StaticQuery
  query={graphql`
  query
  {
    homeJson
    {
      nico_exo 
      {
          image 
        {          
            childImageSharp 
          {
              fluid(quality: 90, maxWidth: 1920) 
            {
                ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
  `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <h2>gatsby-background-image</h2>
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundSection