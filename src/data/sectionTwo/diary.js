import React, { Fragment } from 'react';

const Diary = [
  
  
  {
    fileName:'diary',
    articleNumber: 1,
    sectionName: 'Section 2: Daily Diary',
    style: 'table-side-header-var1 ',
    article: (
      <Fragment>  <h3 className='padding-1'>Day Diary</h3>
        <div className='container-flex-row border-lightgray'>
          <div className='table-side-header gray container-flex-width-1 text-align-center'>
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
    style: 'table-side-header-var1 ',
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
  },
  {
    fileName:'diary',
    articleNumber: 3,
    sectionName: 'Section 2: Daily Diary',
    style: '',
    article: (
      <Fragment>
        <h2>Daily Diary</h2>
        <p>
          {' '}
          <strong>Daily Diary:</strong>This is a one page per day diary, there is
          enough pages for 30 days. It can be useful to gain perspective on your
          experience or help if there are difficulties in treatment or
          diagnosis. For each day there is also a space for the Doctors meeting
          notes for questions and answers for the doctor.{' '}
        </p>
      </Fragment>
    ),
    tableStyleCol1: '1',
    tableStyleCol2: '3',
    tableData: [
    ],
    tableType: 'Diary'
  },
];

export default Diary;
