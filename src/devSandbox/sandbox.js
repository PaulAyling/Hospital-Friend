import React, { Fragment } from 'react';
import '../styles/master.scss';

export default function(props) {
  return (
    <Fragment>
      <h1>Hello</h1>
      <div className='container-flex-column'>
        <div className='test-box-medium color-background-primary'>flex column</div>
        <div className='test-box-medium color-background-secondary'>flex column</div>
        <div className='test-box-medium color-background-tertiary'>flex column</div>
      </div>
      <div className='container-flex-row'>
        <div className='test-box-medium color-background-primary'>Row</div>
        <div className='test-box-medium color-background-secondary'>Row</div>
        <div className='test-box-medium color-background-tertiary'>Row</div>
      </div>

    </Fragment>
  );
}
