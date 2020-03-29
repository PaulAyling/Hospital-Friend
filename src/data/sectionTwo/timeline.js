import React, { Fragment } from 'react';
const Timeline = [
 

  {
    id: 6,
    sectionNumber: 2,
    ChapterNumber: 2,
    articleNumber: 1,
    sectionName: 'Section 2: Timeline Summary',
    style: 'gray',
    article: (
      <Fragment>
        <h1>Event Timeline</h1>
        <p>
          This is for you to build a summary of the main events if you have had
          multiple incidents during your ailment.
        </p>
        <div className='container-flex-row border-lightgray'>
          <div className='table-side-header lightgray container-flex-width-1 text-align-center'>
            Date
          </div>
          <div className='table-side-header lightgray container-flex-width-3 text-align-center'>
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
      { c1: ' ', c2: '' }
    ],
    tableType: 'TableTwoColum'
  }
];

export default Timeline;
