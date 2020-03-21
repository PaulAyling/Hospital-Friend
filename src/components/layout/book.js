import React, { Fragment } from 'react';
import PageBlock from './page-block';
import Page from './page';
import PageNoPadding from './page-nopadding';
import PageNoPaddingImage from './page-nopadding-image'
import PageTableTwoColumn from'./page-table-two-column';

export default function(props) {
  return (
    <section
      id='Book Container'
      className={'container-flex-columm page-width-' + props.bookFormat}>

       <PageNoPaddingImage
        bookFormat={props.bookFormat}
        description='Front Cover'
        data={props.data}
        sectionNumber={0}
      /> 
      <Page
        bookFormat={props.bookFormat}
        description='Contents Page'
        data={props.data}
        sectionNumber={1}
      />
      <Page
        bookFormat={props.bookFormat}
        description='Section 1 Divider'
        data={props.data}
        sectionNumber={2}
      />
      <PageBlock
        bookFormat={props.bookFormat}
        description='Section 1'
        data={props.data}
        sectionNumber={3}
      />
      <Page
        bookFormat={props.bookFormat}
        description='Section 2 Divider'
        data={props.data}
        sectionNumber={6}
      /> 
      <PageTableTwoColumn
        bookFormat={props.bookFormat}
        description='Section 2 Divider'
        data={props.data}
        sectionNumber={6}
      />
    </section>
  );
}