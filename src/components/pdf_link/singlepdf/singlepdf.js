import React from 'react';

// const Singlepdf = ({ pub_url,name }) => (
// 	<a href={pub_url} download>
// 		name {pub_url}
// 	</a>
// );

const Singlepdf = ({ edges }) => (
        {edges.map((file, index) => {
          return (
            <li key={`pdf-${index}`}>
              <a href={file.node.publicURL} download>
                {file.node.name}
              </a>)
);

export default Singlepdf;
