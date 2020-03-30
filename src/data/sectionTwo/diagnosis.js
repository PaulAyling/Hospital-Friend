import React, { Fragment } from 'react';
import DiagnosisTable from '../../components/molecules/diagnosis-table';

const Diagnosis = [
  {
    fileName:'diagnosis',
    articleNumber: 1,
    bookSection: 'Diagnosis',
    pageHeader: 'Diagnosis',
    sectionName: 'Section 2: Diagnosis',
    article: (
      <section id='content'>
        <h1 class='section-header'>Diagnosis</h1>
        <p class='section-intro-text'>
          This section comes in most useful if your condition is not clear or
          your symptoms change. If that is the case then you can build a
          comprehensive record here and may make diagnosis easier.
        </p>{' '}
        <p className='extra-margin'>
          If you only have one symptom and the cause of that symptom seems to be
          unchanged throughout your hospital stay, then you will only need to
          use the first box in this section.{' '}
        </p>
        <p>
          It is not essential to have all the information such as the name of
          the doctor and exact dates but sometimes it can be helpful, so just
          fill in what you feel comfortable with.
        </p>
      </section>
    )
  },
  {
    fileName:'diagnosis',
    articleNumber: 2,
    bookSection: 'Diagnosis',
    pageHeader: '',
    sectionName: 'Section 2:Diagnosis Log',
    article: (
      <Fragment>
        <DiagnosisTable/>
        <DiagnosisTable/>
      </Fragment>
    ),
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

export default Diagnosis;
