import React, { Fragment } from 'react';


export default function(props) {
  return (
    <Fragment>
                <img
            className='container-img-full'
            src={props.src} 
            alt={props.alt}
          />
    </Fragment>
  );
}
