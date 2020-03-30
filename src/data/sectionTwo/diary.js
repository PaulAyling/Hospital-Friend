import React, { Fragment } from 'react';

const Diary = [
  
  {
    fileName:'diary',
    articleNumber: 1,
    sectionName: 'Section 2: Daily Diary',
    style: '',
    article: (
      <Fragment>
        <div className='container-flex-row border-lightgray'>
          <div className='table-side-header lightgray container-flex-width-1 text-align-center'>
            Todays Date
          </div>
          <div className='table-side-header  container-flex-width-3 text-align-center'>
            {' '}
          </div>
        </div>
      </Fragment>
    ),
    tableStyleCol1: '1',
    tableStyleCol2: '3',
    tableData: [
      { c1: 'Daily Log:', c2: '' },
      { c1: ' ', c2: '' },
      { c1: ' ', c2: '' },
      { c1: ' ', c2: '' },
      { c1: 'Thoughts or Questions:', c2: '' },
      { c1: ' ', c2: '' },
      { c1: ' ', c2: '' },
      { c1: ' ', c2: '' }
    ],
    tableType: 'Diary'
  },
  {
    fileName:'diary',
    articleNumber: 2,
    sectionName: 'Section 2: Daily Diary - Extra',
    style: '',
    article: <Fragment></Fragment>,
    tableStyleCol1: '1',
    tableStyleCol2: '3',
    tableData: [
      { c1: 'Additional Notes:', c2: '' },
      { c1: ' ', c2: '' },
      { c1: ' ', c2: '' },
      { c1: ' ', c2: '' },
      { c1: '', c2: '' },
      { c1: ' ', c2: '' },
      { c1: ' ', c2: '' },
      { c1: ' ', c2: '' },
      { c1: ' ', c2: '' },
      { c1: ' ', c2: '' }
    ],
    tableType: 'Diary'
  }
];

export default Diary;
