import React from 'react';
import Singlepdf from 'components/pdf_link/singlepdf';
import PropTypes from 'prop-types';

// const Simplepdf = ({ node }) => (
//     <Singlepdf {...node}/>
// );
const Simplepdf = ({ edges }) => (
    <Singlepdf {...edges}/>
);
Simplepdf.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default Simplepdf;
