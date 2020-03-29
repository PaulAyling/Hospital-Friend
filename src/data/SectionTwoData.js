import React, { Fragment } from 'react';
import TableTwoColumn from '../components/molecules/table-two-column';
import DiagnosisTable from '../components/molecules/diagnosis-table';
const SectionTwoData = [
  {
    id: 3,
    sectionNumber: 2,
    ChapterNumber: 1,
    articleNumber: 1,
    sectionName: 'Section 2: Divider',
    article: (
      <section>
        <div className='container-book-divider container-flex-column-spacebetween'>
          <h1>Section 2</h1>
          <img
            className='container-book-divider-img'
            src='http://paulayling.me/wp-content/uploads/2019/02/hhandbook-Section-Divider.jpg'
            alt='Section 2 divider'
          />
        </div>
      </section>
    )
  },
  {
    id: 6,
    sectionNumber: 2,
    ChapterNumber: 1,
    articleNumber: 2,
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
  },
  {
    sectionNumber: 2,
    ChapterNumber: 2,
    articleNumber: 2,
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
    sectionNumber: 2,
    ChapterNumber: 2,
    articleNumber: 3,
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
  },

  {
    id: '1',
    sectionNumber: 2,
    ChapterNumber: 4,
    articleNumber: 2,
    bookSection: 'Diagnosis',
    pageHeader: 'Diagnosis',
    sectionName: 'Section 2: Diagnosis',
    htmlContent: (
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
    id: '2',
    sectionNumber: 2,
    ChapterNumber: 4,
    articleNumber: 1,
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
  },
  {
    id: '1',
    bookSection: 'Diary',
    sectionName: 'Section 2: Daily Diary',
    htmlContent: (
      <section id='content'>
        <h1 class='section-header'>Diary Section </h1>

        <p className='chapter-sub-text'>
          Everything you need to log your stay in hospital
        </p>
        <h2 className='text-subheading'>Timeline Summary</h2>
        <p className='text-subheading'>
          Intended for you to summarise the main events during your illness to
          make it easier to communicate with staff about what has happened.
        </p>
        <h2 className='text-subheading'>The Daily Diary</h2>
        <p className='text-subheading'>
          This is a one page per day diary, there is enough pages for 30 days.
          It can be useful to gain perspective on your experience or help if
          there are difficulties in treatment or diagnosis. For each day there
          is also a space for the Doctors meeting notes for questions and
          answers for the doctor.
        </p>
      </section>
    )
  },

  {
    id: '3',
    sectionName: 'Section 2: Daily Diary',
    pageHeader: 'Daily Diary Notes',
    htmlContent: (
      <Fragment>
        <main className='container-flex-col'>
          <aside className='diagnosisBox-side-image '></aside>
          <article
            id='notes'
            className='contaier-flex-row test-box-medium-red '>
            <h1>My Stuff</h1>
          </article>
        </main>

        <section id='content' class='contents-table'>
          {' '}
          <p className='pageHeading'>Diary Log2</p>
          <p className=''>A space for your thoughts for the day</p>
          <section class='table-flex-col'>
            <div className='table-flex-row'>
              <div class=' table-column-1'>
                <div class='table-header-row table-header-row-left dark-gray border-bottom-gray'>
                  <h2>DATE</h2>
                </div>
              </div>
              <div class='table-column-2'>
                <div class='table-header-row table-header-row-right border-gray'></div>
              </div>
            </div>

            <div class='table-row'>
              <p className='table-text'>wwQuestions:</p>
            </div>
            <div class='table-row'></div>
            <div class='table-row'></div>
            <div class='table-row'></div>
            <div class='table-row-section'></div>
            <div class='table-row'>
              <p className='table-text'>Thoughts of the day: </p>
            </div>
            <div class='table-row'></div>
            <div class='table-row'></div>
            <div class='table-row'></div>
            <div class='table-row-section'></div>
          </section>
        </section>
      </Fragment>
    )
  },
  {
    id: '4',
    sectionName: 'Section 2: Dialy Diary Notes',
    pageHeader: 'Doctor Meeting Notes',
    htmlContent: (
      <section id='content' class='contents-table'>
        {' '}
        <section class='table-flex-col'>
          <div className='table-flex-row'>
            <div class='table-column-2'>
              <div class='table-header-single'>
                <p className='table-text'>About the Day2222:</p>
              </div>
            </div>
          </div>
          <div class='table-row'></div>
          <div class='table-row'></div>
          <div class='table-row'></div>
          <div class='table-row'></div>
          <div class='table-row'></div>
          <div class='table-row'></div>
          <div class='table-row'></div>
          <div class='table-row'></div>
          <div class='table-row'></div>
          <div class='table-row'></div>
          <div class='table-row-section'></div>
        </section>
      </section>
    )
  },
  {
    id: '1',
    ds: 'Extra',
    sectionName: 'Section 2: Extra Section',
    htmlContent: (
      <section id='content'>
        <h1 class='section-header'>Extra Section</h1>
        <p class='section-intro-text'>Extra Materials and Links</p>
        <p>
          There are some additional that are not essential but you may find
          useful. There are also links to external resources here as well
        </p>

        <ul>
          <li>
            Extra Sections
            <ul>
              <li>Unusual Activity Log</li>
              <li>Drug Log</li>
              <li>Other Resources</li>
            </ul>
          </li>
        </ul>
      </section>
    )
  },

  {
    id: '2',
    dd: 'Extra',
    sectionName: 'Section 2: Unusual Activities Log',
    pageName: 'logUnusualActivities',
    htmlContent: (
      <section id='content' class='contents-table'>
        <p>
          If diagnosis is becoming difficult it can be useful to log anything
          unusual you did or saw prior to your symptoms. This log is for that.
        </p>
        <div class='container-log-content'>
          <header class='diary-header-container'>
            <div class='unusual-header-label'>
              <h2>Unusual activities, places etc</h2>
            </div>
          </header>
          <div class='lined-row'></div>
          <div class='lined-row'></div>
          <div class='lined-row'></div>
          <div class='lined-row'></div>
          <div class='lined-row'></div>
          <div class='lined-row'></div>
          <div class='lined-row'></div>
        </div>
      </section>
    )
  },
  {
    id: '3',
    ddd: 'Extra',
    pageHeader: '',
    sectionName: 'logUnusualActivities',
    htmlContent: (
      <section id='content' class='contents-table'>
        <div class='container-diary-content'>
          <header class='diary-header-container'>
            <div class='unusual-header-label'>
              <h2>More notes</h2>
            </div>
          </header>
          <div class='lined-row'></div>
          <div class='lined-row'></div>
          <div class='lined-row'></div>
          <div class='lined-row'></div>
          <div class='lined-row'></div>
          <div class='lined-row'></div>
          <div class='lined-row'></div>
          <div class='lined-row'></div>
          <div class='lined-row'></div>
        </div>
      </section>
    )
  },
  {
    id: '4',
    dsdsd: 'Extra',
    sectionName: 'Extra: Drug Log',
    htmlContent: (
      <section id='content'>
        <p>
          Sometimes you can leave hospital and not know what drugs you have
          taken. This log is somewhere for you to record this.
        </p>
        <section id='Container-Drugboxes' className='container-flex-column'>
          {/* Drugbox  */}
          <div
            id='drugbox'
            className='container-flex-column border-gray margin-bottom3px'>
            <div className='container-flex-row width1 border-bottom '>
              <div className='gray width4 text-header-inline '>Drug Name:</div>
              <div className=''></div>
            </div>{' '}
            <div className='container-flex-row width1 border-bottom h-4rem'>
              <div className='gray width4  text-header-inline'>
                Drug Purpose:
              </div>
              <div className=''></div>
            </div>
            <div className='container-flex-row width1 border-bottom   '>
              <div className='gray width4  text-header-inline'>Dosage:</div>
              <div className=''></div>
            </div>
            <div className='container-flex-row width1 border-bottom   '>
              <div className='gray width4  text-header-inline'>Frequency:</div>
              <div className=''></div>
            </div>
          </div>
          {/* Drugbox  */}
          <div
            id='drugbox'
            className='container-flex-column border-gray margin-bottom3px'>
            <div className='container-flex-row width1 border-bottom '>
              <div className='gray width4 text-header-inline '>Drug Name:</div>
              <div className=''></div>
            </div>{' '}
            <div className='container-flex-row width1 border-bottom h-4rem'>
              <div className='gray width4  text-header-inline'>
                Drug Purpose:
              </div>
              <div className=''></div>
            </div>
            <div className='container-flex-row width1 border-bottom   '>
              <div className='gray width4  text-header-inline'>Dosage:</div>
              <div className=''></div>
            </div>
            <div className='container-flex-row width1 border-bottom   '>
              <div className='gray width4  text-header-inline'>Frequency:</div>
              <div className=''></div>
            </div>
          </div>
          {/* Drugbox  */}
          <div
            id='drugbox'
            className='container-flex-column border-gray margin-bottom3px'>
            <div className='container-flex-row width1 border-bottom '>
              <div className='gray width4 text-header-inline '>Drug Name:</div>
              <div className=''></div>
            </div>{' '}
            <div className='container-flex-row width1 border-bottom h-4rem'>
              <div className='gray width4  text-header-inline'>
                Drug Purpose:
              </div>
              <div className=''></div>
            </div>
            <div className='container-flex-row width1 border-bottom   '>
              <div className='gray width4  text-header-inline'>Dosage:</div>
              <div className=''></div>
            </div>
            <div className='container-flex-row width1 border-bottom   '>
              <div className='gray width4  text-header-inline'>Frequency:</div>
              <div className=''></div>
            </div>
          </div>
          {/* Drugbox  */}
          <div
            id='drugbox'
            className='container-flex-column border-gray margin-bottom3px'>
            <div className='container-flex-row width1 border-bottom '>
              <div className='gray width4 text-header-inline '>Drug Name:</div>
              <div className=''></div>
            </div>{' '}
            <div className='container-flex-row width1 border-bottom h-4rem'>
              <div className='gray width4  text-header-inline'>
                Drug Purpose:
              </div>
              <div className=''></div>
            </div>
            <div className='container-flex-row width1 border-bottom   '>
              <div className='gray width4  text-header-inline'>Dosage:</div>
              <div className=''></div>
            </div>
            <div className='container-flex-row width1 border-bottom   '>
              <div className='gray width4  text-header-inline'>Frequency:</div>
              <div className=''></div>
            </div>
          </div>
        </section>
      </section>
    )
  },
  {
    id: '5',
    sectionName: 'Extra',
    pageHeader: '',
    htmlContent: (
      <section id='content'>
        <section id='Container-Drugboxes' className='container-flex-column'>
          {/* Drugbox  */}
          <div
            id='drugbox'
            className='container-flex-column border-gray margin-bottom3px'>
            <div className='container-flex-row width1 border-bottom '>
              <div className='gray width4 text-header-inline '>Drug Name:</div>
              <div className=''></div>
            </div>{' '}
            <div className='container-flex-row width1 border-bottom h-4rem'>
              <div className='gray width4  text-header-inline'>
                Drug Purpose:
              </div>
              <div className=''></div>
            </div>
            <div className='container-flex-row width1 border-bottom   '>
              <div className='gray width4  text-header-inline'>Dosage:</div>
              <div className=''></div>
            </div>
            <div className='container-flex-row width1 border-bottom   '>
              <div className='gray width4  text-header-inline'>Frequency:</div>
              <div className=''></div>
            </div>
          </div>
          {/* Drugbox  */}
          <div
            id='drugbox'
            className='container-flex-column border-gray margin-bottom3px'>
            <div className='container-flex-row width1 border-bottom '>
              <div className='gray width4 text-header-inline '>Drug Name:</div>
              <div className=''></div>
            </div>{' '}
            <div className='container-flex-row width1 border-bottom h-4rem'>
              <div className='gray width4  text-header-inline'>
                Drug Purpose:
              </div>
              <div className=''></div>
            </div>
            <div className='container-flex-row width1 border-bottom   '>
              <div className='gray width4  text-header-inline'>Dosage:</div>
              <div className=''></div>
            </div>
            <div className='container-flex-row width1 border-bottom   '>
              <div className='gray width4  text-header-inline'>Frequency:</div>
              <div className=''></div>
            </div>
          </div>
          {/* Drugbox  */}
          <div
            id='drugbox'
            className='container-flex-column border-gray margin-bottom3px'>
            <div className='container-flex-row width1 border-bottom '>
              <div className='gray width4 text-header-inline '>Drug Name:</div>
              <div className=''></div>
            </div>{' '}
            <div className='container-flex-row width1 border-bottom h-4rem'>
              <div className='gray width4  text-header-inline'>
                Drug Purpose:
              </div>
              <div className=''></div>
            </div>
            <div className='container-flex-row width1 border-bottom   '>
              <div className='gray width4  text-header-inline'>Dosage:</div>
              <div className=''></div>
            </div>
            <div className='container-flex-row width1 border-bottom   '>
              <div className='gray width4  text-header-inline'>Frequency:</div>
              <div className=''></div>
            </div>
          </div>
          {/* Drugbox  */}
          <div
            id='drugbox'
            className='container-flex-column border-gray margin-bottom3px'>
            <div className='container-flex-row width1 border-bottom '>
              <div className='gray width4 text-header-inline '>Drug Name:</div>
              <div className=''></div>
            </div>{' '}
            <div className='container-flex-row width1 border-bottom h-4rem'>
              <div className='gray width4  text-header-inline'>
                Drug Purpose:
              </div>
              <div className=''></div>
            </div>
            <div className='container-flex-row width1 border-bottom   '>
              <div className='gray width4  text-header-inline'>Dosage:</div>
              <div className=''></div>
            </div>
            <div className='container-flex-row width1 border-bottom   '>
              <div className='gray width4  text-header-inline'>Frequency:</div>
              <div className=''></div>
            </div>
          </div>
          {/* Drugbox  */}
          <div
            id='drugbox'
            className='container-flex-column border-gray margin-bottom3px'>
            <div className='container-flex-row width1 border-bottom '>
              <div className='gray width4 text-header-inline '>Drug Name:</div>
              <div className=''></div>
            </div>{' '}
            <div className='container-flex-row width1 border-bottom h-4rem'>
              <div className='gray width4  text-header-inline'>
                Drug Purpose:
              </div>
              <div className=''></div>
            </div>
            <div className='container-flex-row width1 border-bottom   '>
              <div className='gray width4  text-header-inline'>Dosage:</div>
              <div className=''></div>
            </div>
            <div className='container-flex-row width1 border-bottom   '>
              <div className='gray width4  text-header-inline'>Frequency:</div>
              <div className=''></div>
            </div>
          </div>
        </section>
      </section>
    )
  },
  {
    id: '6',
    bookSection: 'Extra',
    sectionName: 'Appendix',
    htmlContent: (
      <section id='content'>
        <h1 class='section-header'>Thank You!</h1>

        <p>
          I would love to hear any feedback or suggestions so I can imporve the
          next verion of this please visit our website HospitalHelper.com and
          you can contact me personally.
        </p>
      </section>
    )
  },
  {
    id: '7',
    bookSection: 'Extra',
    pageHeader: 'Appendix',
    htmlContent: (
      <section id='content'>
        <h1 class='section-header'>Thank You!</h1>
        <p class='section-intro-text'>I hope this has helped</p>
        <p>
          I would love to hear any feedback or suggestions so I can imporove the
          next version of this please visit our website HospitalHelper.com
        </p>

        <ul>
          <li>
            Extra Sections
            <ul>
              <li>More to be added here</li>
            </ul>
          </li>
        </ul>
      </section>
    )
  }
];

export default SectionTwoData;
