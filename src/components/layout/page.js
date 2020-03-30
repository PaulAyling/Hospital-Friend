import React, { Fragment } from 'react';


export default function(props) {
  return (
    <section
      id={props.data[0].sectionName}
      className={'new-page border-lightgray padding-3 page-size-' + props.bookFormat}>
      <header>{props.data[0].sectionName}</header>
      {props.data[0].article}
    </section>
  );
}
