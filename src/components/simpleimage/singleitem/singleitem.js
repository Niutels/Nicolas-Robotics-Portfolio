import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Singleitem = ({ title, copy, image }) => (
  <figure>
{
	}    <Img imgStyle={{objectFit: 'cover'}} fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
  </figure>
);

Singleitem.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Singleitem;
