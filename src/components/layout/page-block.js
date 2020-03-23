import React, { Fragment } from 'react';

export default function(props) {
  // const intId = parseInt(id);

  return (
    <section
      id={props.data[props.sectionNumber].sectionName}
      className='padding-3-large-top'>
      {props.data[props.sectionNumber].article}
    </section>
  );
}
