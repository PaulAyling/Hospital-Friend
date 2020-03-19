import React, { Fragment } from 'react';

export default function(props) {
  return (
    <section id={props.description} className={'page-size-'+props.bookFormat}>

          <img
    className={'page-size-'+props.bookFormat}
    src={props.data[props.sectionNumber].article}
    alt={props.data[props.sectionNumber].sectionName}
  />
    </section>
  );
}
