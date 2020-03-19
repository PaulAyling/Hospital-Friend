import React, { Fragment } from 'react';

export default function(props) {
  return (
    <section id={props.description} className={'padding-3 page-size-'+props.bookFormat}>
      {props.data[props.sectionNumber].article}
    </section>
  );
}
