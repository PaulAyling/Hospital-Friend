import React, { Fragment } from 'react';

const Drugs = [
 
  {
    fileName:'drugs',
    articleNumber:1,
    article: (
      <Fragment>
        <h1>Drug Log</h1>
        <p>A place to record drugs you have taken in Hospital</p>
      </Fragment>
     
    ),
    tableStyleCol1: '1',
    tableStyleCol2: '3',
    tableData: [
      { c1: 'Drug Name', c2: '' },
      { c1: 'Description', c2: '' },
      { c1: 'Dosage & Frequency', c2: '' },
      { c1: ' ', c2: '' },
      { c1: 'Drug Name', c2: '' },
      { c1: 'Description', c2: '' },
      { c1: 'Dosage & Frequency', c2: '' },
    ],
    tableType: 'TableTwoColum',
    style:'lightgray table-side-header '

  },
  {
    fileName:'drugs',
    articleNumber:2,
    article: (
      <Fragment>
        <h1>Drug Log</h1>
      </Fragment>
     
    ),
    tableStyleCol1: '1',
    tableStyleCol2: '3',
    tableData: [
      { c1: 'Drug Name', c2: '' },
      { c1: 'Description', c2: '' },
      { c1: 'Dosage & Frequency', c2: '' },
      { c1: ' ', c2: '' },
      { c1: ' ', c2: '' },
      { c1: 'Drug Name', c2: '' },
      { c1: 'Description', c2: '' },
      { c1: 'Dosage & Frequency', c2: '' },
    ],
    tableType: 'TableTwoColum',
    style:'lightgray table-side-header '

  }
];

export default Drugs;
