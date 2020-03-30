import React from 'react';
import TableTwoColumn from '../molecules/table-two-column'

export default function(props) {
  return (
    <section id={props.sectionName} className={'border-lightgray new-page padding-3 page-size-'+props.bookFormat}>
      {props.data[0].article}
      <TableTwoColumn         
      bookFormat={props.bookFormat}
        data={props.data}
        />
    </section>
  );
}
