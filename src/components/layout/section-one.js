import React, { Fragment } from 'react';

import PageImageFullScreen from '../layout/page-image-fullscreen'
import Page from '../layout/page'
import Contents from '../content/contentsTable'

export default function(props) {
  return (
    <Fragment>
      <section className='page'>
        <div className='page-border'>
          <article className='container-flex-column'>
      
           <PageImageFullScreen 
           id="Front Cover"
           src="http://paulayling.me/wp-content/uploads/2019/02/hHandbookCover.png" 
           alt="Front Cover"/>
       <Page/>
          </article>
        </div>
      </section>
    </Fragment>
  );
}
