import React, { Fragment } from 'react';

export default function(props) {
  return (
    <Fragment>
      <section id={'page-nopadding: '+props.description} className='container-full-width '>
      <h1>hello</h1>
        <img
          className='container-img-full'
          src={props.data[props.sectionNumber].article}
          alt={props.description}
        />
      </section>
    </Fragment>
  );
}
