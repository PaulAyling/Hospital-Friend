import React, { Fragment } from 'react';
import PageImageFullScreen from './page-nopadding';
import PageBlock from './page-block';
import Page from './page'
import PageNoPadding from './page-nopadding'

export default function(props) {

  return (
    <Fragment>
      <div id="section-one container-flex-column ">

    
            {/* <PageImageFullScreen
            render={props.render}
              description='Front Cover'
              data={props.data}
              sectionNumber={0}
              
            />
            <Page
            render={props.render}
              description='Contents Page'
              data={props.data}
              sectionNumber={1}
            />  */}
            <PageNoPadding
            render={props.render}
              description='Section 1 Divider'
              data={props.data}
              sectionNumber={2}
            /> 
             {/* <PageBlock
              description='Section 1'
              data={props.data}
              sectionNumber={2}
            /> */}


      </div>
    </Fragment>
  );
}
