import React, { Fragment } from 'react';
import TableTwoColumn from '../molecules/table-two-column'

export default function(props) {
  return (
    <section id={props.sectionName} className={'padding-3 page-size-'+props.bookFormat}>
      {props.data[0].article}
      <TableTwoColumn         
      bookFormat={props.bookFormat}
        data={props.data}
        />
    </section>
  );
}
