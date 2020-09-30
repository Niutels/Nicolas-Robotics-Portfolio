import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/gallery/item';
import { Container } from './gallery.css';

const Gallery = ({ items }) => (
<Container>
        {items.map( (item, i) => (<a href={item.link} key={i}> <Item {...item} key={i}/>  </a>)   ) }
</Container>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
