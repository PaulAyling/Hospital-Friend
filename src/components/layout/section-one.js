import React, { Fragment } from 'react';
import PageImageFullScreen from '../layout/page-image-fullscreen';
import Page from '../layout/page';

export default function(props) {
  const Content = props.content;
  return (
    <Fragment>
      <section className='page'>
        <div className='page-border'>
          <article className='container-flex-column'>
            <PageImageFullScreen
              description='Front Cover'
              content={Content}
              contentNumber={0}
            />
            <Page
              description='Contents Page'
              content={Content}
              contentNumber={1}
            />
            <Page
              description='Text Section'
              content={Content}
              contentNumber={2}
            />
          </article>
        </div>
      </section>
    </Fragment>
  );
}
