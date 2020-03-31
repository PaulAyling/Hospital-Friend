import React, { Fragment } from 'react';
const YourInformation = [
  {
    fileName:'yourInformation',
    articleNumber: 1,
    sectionName: 'Section 2: Your Info',
    style: 'gray',
    article: (
      <Fragment>
        <h1>Your Information</h1>
      </Fragment>
    ),
    tableStyleCol1: '1',
    tableStyleCol2: '3',
    tableData: [
      { c1: '', c2: '' },
      { c1: 'Existing Medical conditions', c2: '' },
      { c1: 'Insurance details', c2: '' },
      { c1: 'Hospital Ward Contact Details', c2: '' },
      { c1: 'Wifi password and username for ward', c2: '' },
      { c1: ' ', c2: '' },
      { c1: ' ', c2: '' },
      { c1: ' ', c2: '' },
      { c1: ' ', c2: '' }
    ],
    tableType: 'TableTwoColum'
  },
  {
    fileName:'yourInformation',
    articleNumber: 2,
    sectionName: 'Section 2: Your Info',
    fileName:'yourInformation',
    style: 'gray',
    article: (
      <Fragment>
        <h1>Your Information</h1>
      </Fragment>
    ),
    tableStyleCol1: '1',
    tableStyleCol2: '3',
    tableData: [
      { c1: '', c2: '' },
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

export default YourInformation;
