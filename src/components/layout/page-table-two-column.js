import React, { Fragment } from 'react';
import TableTwoColumn from '../molecules/table-two-column'

export default function(props) {
  return (
    <section id={props.description+'paul'} className={'padding-3 page-size-'+props.bookFormat}>
      {props.data[props.sectionNumber].article}
      <TableTwoColumn         
      bookFormat={props.bookFormat}
        description={props.description}
        data={props.data}
        sectionNumber={props.sectionNumber}/>
    </section>
  );
}
