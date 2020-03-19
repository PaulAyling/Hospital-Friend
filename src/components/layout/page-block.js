import React, { Fragment } from 'react';

export default function(props) {
  // const intId = parseInt(id);

  return (
    <article
      id={'page-block.js: ' + props.description}
      className='padding-3-large-top'>
      {props.data[props.sectionNumber].article}
    </article>
  );
}
