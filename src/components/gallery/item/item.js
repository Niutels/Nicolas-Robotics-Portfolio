import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title } from './item.css';

const Item = ({ title, copy, image }) => (
  <figure>
    <Img imgStyle={{objectFit: 'contain',height:'180px'}} fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    {/*<figcaption>
  		<Title>{title}</Title>
    </figcaption>
      */}
  </figure>

);

Item.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
