import React, { Fragment } from 'react';
import DiagnosticTable from '../molecules/diagnosis-table';

export default function(props) {
  return (
    <section
      id={props.data[0].sectionName}
      className={'border-red padding-3 page-size-' + props.bookFormat}>
      <header>{props.data[0].sectionName}</header>
      {props.data[0].article}
    </section>
  );
}
