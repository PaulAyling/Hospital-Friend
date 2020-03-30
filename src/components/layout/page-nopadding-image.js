import React, { Fragment } from 'react';

export default function(props) {
  return (
<section id={props.data[0].sectionName} className={'new-page page-size-'+props.bookFormat}>


          <img
    className={'page-size-'+props.bookFormat+'-img-full-hieght'}
    src={props.data[0].article} 
    alt={props.data[0].sectionName} 
  />
    </section>
  );
}
