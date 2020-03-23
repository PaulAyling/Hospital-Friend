import React, { Fragment } from 'react';

export default function(props) {
  return (
    <section id={props.data[props.sectionNumber].sectionName} className={'padding-3 page-size-'+props.bookFormat}>
    <header>{props.data[props.sectionNumber].sectionName}</header>
      {props.data[props.sectionNumber].article}
    </section>
  );
}
