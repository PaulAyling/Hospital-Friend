import React from 'react';
const DiagnosisData = {
  data: [
    {
      id: '1',
      bookSection: 'Diagnosis',
      pageHeader: 'Diagnosis',
      pageName: 'sectionDivider',
      htmlContent: (
        <section id='content'>
          <h1 class='section-header'>Diagnosis</h1>
          <p class='section-intro-text'>
            This section comes in most useful if your condition is not clear or
            your symptoms change. If that is the case then you can build a
            comprehensive record here and may make diagnosis easier.
          </p>
   {' '}
          <p className="extra-margin">
         
            If you only have one symptom and the cause of that symptom seems to
            be unchanged throughout your hospital stay, then you will only need
            to use the first box in this section.{' '}
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
      bookSection: 'Diagnosis',
      pageHeader: '',
      pageName: 'leftPersonDiagram',
      htmlContent: (
        <section id='content' className='container-whole-page-left'>
          <div id='Diagnosis-Box' className='container-flex-row '>
            <div className='diagnosisBox-side-image '></div>
            <div className='container-flex-column-noWidth width4'>
              <div className='container-symptom-box gray'>
                {/* Article */}
                <article className=' container-flex-row'>
                  <div className='container-flex-column pd-4'>
                    <div className='symptom-header'>
                      <strong>Symptom:</strong>
                    </div>

                    <div className='h-1rem'></div>
                    <div className='container-flex-col'>
                      <div className='symptom-info-header '>Date:</div>
                      <div className='symptom-info width75 text-white'>
                        white txt
                      </div>
                    </div>
                  </div>
                  <div className=''></div>
                </article>
              </div>
            </div>
            <div className='width-c3 '>
              <div className='container-flex-column'>
                <div className='h-1p5rem width1 bdr-bottom'></div>

                <div className='h-1p5rem bdr-bottom'></div>
                <div className='h-1p5rem bdr-bottom'></div>
                <div className='h-1p5rem bdr-bottom'></div>
              </div>
            </div>
          </div>
          <article className=' container-flex-row '>
            <div className='container-flex-column '>
              <div className='text-sm bdr-top cause-header '>
                Possible cause suggested by
                ______________________________________ on the _______________ .
              </div>

              <div className='h-1p5rem bdr-bottom'></div>
              <div className='h-2rem bdr-bottom'></div>
              <div className='cause-header bdr-bottom  text-sm  gray'>Cause disproven?   
                ____________ how?______________________________________________________ .</div>
            </div>
          </article>
          <article className=' container-flex-row '>
            <div className='container-flex-column '>
              <div className='text-sm bdr-top cause-header '>
                Possible cause suggested by
                ______________________________________ on the _______________ .
              </div>

              <div className='h-1p5rem bdr-bottom'></div>
              <div className='h-2rem bdr-bottom'></div>
              <div className='cause-header bdr-bottom  text-sm  gray'>Cause disproven?   
                ____________ how?______________________________________________________ .</div>
            </div>
          </article>
          <article className=' container-flex-row '>
            <div className='container-flex-column '>
              <div className='text-sm bdr-top cause-header '>
                Possible cause suggested by
                ______________________________________ on the _______________ .
              </div>

              <div className='h-1p5rem bdr-bottom'></div>
              <div className='h-2rem bdr-bottom'></div>
              <div className='cause-header bdr-bottom  text-sm  gray'>Cause disproven?   
                ____________ how?______________________________________________________ .</div>
            </div>
          </article>
          <article className=' container-flex-row '>
            <div className='container-flex-column '>
              <div className='text-sm bdr-top cause-header '>
                Possible cause suggested by
                ______________________________________ on the _______________ .
              </div>

              <div className='h-1p5rem bdr-bottom'></div>
              <div className='h-2rem bdr-bottom'></div>
              <div className='cause-header bdr-bottom  text-sm  gray'>Cause disproven?   
                ____________ how?______________________________________________________ .</div>
            </div>
          </article>
          <article className=' container-flex-row '>
            <div className='container-flex-column '>
              <div className='text-sm bdr-top cause-header '>
                Possible cause suggested by
                ______________________________________ on the _______________ .
              </div>

              <div className='h-1p5rem bdr-bottom'></div>
              <div className='h-2rem bdr-bottom'></div>
              <div className='cause-header bdr-bottom  text-sm  gray'>Cause disproven?   
                ____________ how?______________________________________________________ .</div>
            </div>
          </article>
          <article className=' container-flex-row '>
            <div className='container-flex-column '>
              <div className='text-sm bdr-top cause-header '>
                Possible cause suggested by
                ______________________________________ on the _______________ .
              </div>

              <div className='h-1p5rem bdr-bottom'></div>
              <div className='h-2rem bdr-bottom'></div>
              <div className='cause-header bdr-bottom  text-sm  gray'>Cause disproven?   
                ____________ how?______________________________________________________ .</div>
            </div>
          </article>
          
          
          
        </section>
      )
    }
  ]
};

export default DiagnosisData;
