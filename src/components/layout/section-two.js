import React, { Fragment } from 'react';
import PageImageFullScreen from '../layout/page-image-fullscreen';
import Page from '../layout/page';

export default function(props) {
  const Content = props.content;
  return (
    <Fragment>
      <div id="section-one" className='page'>

          <div id="Single Content Container" className='container-flex-column'>
            <Page
              description='Section 2'
              content={Content}
              contentNumber={3}
            /> 
          </div>

      </div>
    </Fragment>
  );
}
