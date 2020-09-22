import React from 'react';
import PropTypes from 'prop-types';
import Singleitem from 'components/simpleimage/singleitem';
import { Singlecontainer } from './simpleimage.css';

const Simpleimage = ({ singleitem }) => (
<Singlecontainer>
    <Singleitem {...singleitem}/>
</Singlecontainer>    
);

Simpleimage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Simpleimage;
