import React, { Fragment } from 'react';
import PageBlock from './page-block';
import Page from './page';
import PageNoPadding from './page-nopadding';

export default function(props) {
  return (
    <section id='Book Container' className='container-flex-columm'>
      {/* <PageNoPadding
        pageSize={props.pageSize}
        description='Front Cover'
        data={props.data}
        sectionNumber={0}
      />
      <Page
        pageSize={props.pageSize}
        description='Contents Page'
        data={props.data}
        sectionNumber={1}
      />
      <Page
            pageSize={props.pageSize}
              description='Section 1 Divider'
              data={props.data}
              sectionNumber={2}
            />  */}
      <PageBlock
              description='Section 1'
              data={props.data}
              sectionNumber={3}
            />
    </section>
  );
}
