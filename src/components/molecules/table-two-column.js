import React, { Fragment } from 'react';

export default function(props) {
  // const intId = parseInt(id);

  return (
    <Fragment>

<section>
  <div className='container-flex-row border-lightgray'>
    <div className='gray container-flex-grow-1 table-side-header'>{props.rows[1].c1}</div>
    <div className={'container-flex-grow-'+props.width2}></div> 
  </div>
</section>
    </Fragment>

    
  );
}
