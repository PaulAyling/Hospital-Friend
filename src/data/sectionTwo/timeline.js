import React, { Fragment } from 'react';
const Timeline = [
 

  {
    fileName:'timeline' , 
    articleNumber: 1,
    sectionName: 'Section 2: Timeline Summary',
    style: 'gray',
    article: (
      <Fragment>
        <h1>Timeline</h1>
        <p>
          This is for you to build a summary of the main events if you have had
          multiple incidents during your ailment.
        </p>
        <div className='container-flex-row border-lightgray'>
          <div className='table-side-header gray container-flex-width-1 text-align-center'>
            Date
          </div>
          <div className='table-side-header gray container-flex-width-3 text-align-center'>
            {' '}
            Event
          </div>
        </div>
      </Fragment>
    ),
    tableStyleCol1: '1',
    tableStyleCol2: '3',
    tableData: [
      { c1: ' ', c2: '' },
      { c1: ' ', c2: '' },
      { c1: ' ', c2: '' },
      { c1: ' ', c2: '' },
      { c1: ' ', c2: '' },
      { c1: ' ', c2: '' },

 

    ],
    tableType: 'TableTwoColum'
  },

  {
    fileName:'timeline' , 
    articleNumber: 2,
    sectionName: 'Section 2: Timeline Summary',
    style: 'gray',
    article: (
      <Fragment>
        <h1>Timeline</h1>
        <div className='container-flex-row border-lightgray'>
          <div className='table-side-header gray container-flex-width-1 text-align-center'>
            Date
          </div>
          <div className='table-side-header gray container-flex-width-3 text-align-center'>
            {' '}
            Event
          </div>
        </div>
      </Fragment>
    ),
    tableStyleCol1: '1',
    tableStyleCol2: '3',
    tableData: [
      { c1: ' ', c2: '' },
      { c1: ' ', c2: '' },
      { c1: ' ', c2: '' },
      { c1: ' ', c2: '' },
      { c1: ' ', c2: '' },
      { c1: ' ', c2: '' },
      { c1: ' ', c2: '' },
 

    ],
    tableType: 'TableTwoColum'
  }
];

export default Timeline;
