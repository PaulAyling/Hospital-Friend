import React, { Fragment } from 'react';

export default function(props) {
  return (
    <section id={props.description} className={'page-size-'+props.bookFormat}>
      {props.data[props.sectionNumber].sectionName}
    </section>
  );
}
