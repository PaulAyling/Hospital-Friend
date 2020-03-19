import React, { Fragment } from 'react';

export default function(props) {
  return (
    <section id={props.description} className={props.pageSize}>
      {props.data[props.sectionNumber].article}
    </section>
  );
}
