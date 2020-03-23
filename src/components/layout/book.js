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


     
   {/* FRONT COVER */}
     <PageNoPaddingImage
        bookFormat={props.bookFormat}
        description='Front Cover'
        data={props.data}
        sectionNumber={0}
      /> 
      {/* section 1: Contents */}
      <Page
        bookFormat={props.bookFormat}
        data={props.data}
        sectionNumber={1}
      />
        {/* section 1: Divider */}
      <Page
        bookFormat={props.bookFormat}
        data={props.data}
        sectionNumber={2}
      />
       {/* section 1: It started in an Ambulance */}
      <PageBlock
        bookFormat={props.bookFormat}
        description='Section 1'
        data={props.data}
        sectionNumber={3}
      />
       <PageBlock
        bookFormat={props.bookFormat}
        description='Section 1: About this Book'
        data={props.data}
        sectionNumber={4}
      /> 
      <Page
        bookFormat={props.bookFormat}
        description='Section 1 Item Checklist'
        data={props.data}
        sectionNumber={5}
      /> 
             <PageBlock
        bookFormat={props.bookFormat}
        description='Section 1: About this Book'
        data={props.data}
        sectionNumber={6}
      /> 
             <PageBlock
        bookFormat={props.bookFormat}
        description='Section 1: About this Book'
        data={props.data}
        sectionNumber={8}
      /> 



    </section>
  );
}
