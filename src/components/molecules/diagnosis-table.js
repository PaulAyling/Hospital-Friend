import React, { Fragment } from 'react';


export default function(props) {
  return (
   <Fragment>
      <header className='container-flex-row-spacebetween border-outline'>
          <aside className='diagnosisBox-side-image'></aside>
          <aside className=' container-flex-row'>
            <div className='container-flex-column-spacebetween padding-pt5 gray'>
              <div className='text-right'>
                <strong>Symptom:</strong>
              </div>

              <div className=''></div>
              <div className='padding-pt5 text-center'>
                <div className=' '>Date:</div>
                <div className='text-white'>white txt</div>
              </div>
            </div>
            <div className=''></div>
          </aside>
          <section
            id='notes'
            className='container-flex-column width-flex-grow-1 '>
            <div className='height-2 border-underline'></div>
            <div className='height-2 border-underline'></div>
            <div className='height-2 border-underline'></div>
            <div className='height-2 border-underline'></div>
            <div className='height-2 border-underline'></div>
          </section>
        </header>
        <main>

          <article
            id='notes'
            className='container-flex-column width-flex-grow-1 '>
            <div className='height-2 border-underline'><p className='text-bottom text-size-x'>Notes for Diagnosis and Suggestions:</p></div>
            <div className='height-2 border-underline'></div>
            <div className='height-2 border-underline'></div>
            <div className='height-2 border-underline'></div>
            <div className='height-2 border-underline'></div>
            <div className='height-2 border-underline'></div>
            <div className='height-2 border-underline'></div>
            <div className='height-2 border-underline'></div>
            <div className='height-2 border-underline'></div>
            <div className='height-2 border-underline'></div>
            <div className='height-2 border-underline'></div>
          </article>
        </main>
   </Fragment>
  );
}
