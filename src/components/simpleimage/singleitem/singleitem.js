import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy } from './singleitem.css';

const Singleitem = ({ title, copy, image }) => (
  <figure>
{/*      <Title>{title}</Title>
*/}    <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    <figcaption>
{/*      <Copy>{copy}</Copy>
*/}    </figcaption>
  </figure>
);

Singleitem.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Singleitem;
