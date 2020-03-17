import React, { Fragment } from 'react';
const SectionOneData = {
  content: [
    {
      id: 1,
      sectionName: 'Front Cover',
      article:
        'http://paulayling.me/wp-content/uploads/2019/02/hHandbookCover.png'
    },
    {
      id: 1,
      sectionName: 'Contents',
      article: (
        <Fragment>
          <h2 className=''>Contents</h2>
          <section className=''>
            <ul>
              <li>
                <div>
                  <h3 className='text-align-center'>Section 1</h3>
                </div>
              </li>
              <li>
                <div className='container-flex-row bdr-bottom-gray'>
                  <div>
                    <h4 className='contents-item'>
                      It Started in an Ambulance
                    </h4>
                  </div>
                  <div>
                    <h4 className='text-align-right'>1</h4>
                  </div>
                </div>
              </li>
              <li>
                <div className='container-flex-row bdr-bottom-gray'>
                  <div>
                    <h4 className='contents-item'>About this book</h4>
                  </div>
                  <div>
                    <h4 className='contents-page-number'>1</h4>
                  </div>
                </div>
              </li>
              <li>
                <div className='container-flex-row'>
                  <div>
                    <h5 className='contents-item'>Purpose of this book</h5>
                  </div>
                  <div>
                    <h5 className='contents-page-number'>1</h5>
                  </div>
                </div>
              </li>
              <li>
                <div className='container-flex-row'>
                  <div>
                    <h5 className='contents-item'>Whats in the book</h5>
                  </div>
                  <div>
                    <h5 className='contents-page-number'>1</h5>
                  </div>
                </div>
              </li>
              <li>
                <div className='container-flex-row'>
                  <div>
                    <h5 className='contents-item'>How to use this book</h5>
                  </div>
                  <div>
                    <h5 className='contents-page-number'>1</h5>
                  </div>
                </div>
              </li>
              <li>
                <div className='container-flex-row bdr-bottom-gray'>
                  <div>
                    <h4 className='contents-item'>
                      Advice for your Hospital Stay
                    </h4>
                  </div>
                  <div>
                    <h4 className='contents-page-number'>1</h4>
                  </div>
                </div>
              </li>
              <li>
                <div className='container-flex-row'>
                  <div>
                    <h5 className='contents-item'>Things to bring</h5>
                  </div>
                  <div>
                    <h5 className='contents-page-number'>1</h5>
                  </div>
                </div>
              </li>
              <li>
                <div className='container-flex-row'>
                  <div>
                    <h5 className='contents-item'>Managing People</h5>
                  </div>
                  <div>
                    <h5 className='contents-page-number'>1</h5>
                  </div>
                </div>
              </li>
              <li>
                <div className='container-flex-row'>
                  <div>
                    <h5 className='contents-item'>Hospital Release</h5>
                  </div>
                  <div>
                    <h5 className='contents-page-number'>1</h5>
                  </div>
                </div>
              </li>
            </ul>

            <ul>
              <li>
                <div>
                  <h3 className='text-align-center'>Section 2</h3>
                </div>
              </li>
              <li>
                <div className='container-flex-row bdr-bottom-gray'>
                  <div>
                    <h4 className='contents-item'>Your Information</h4>
                  </div>
                  <div>
                    <h4 className='contents-page-number'>1</h4>
                  </div>
                </div>
              </li>
              <li>
                <div className='container-flex-row bdr-bottom-gray'>
                  <div>
                    <h4 className='contents-item'>Logs</h4>
                  </div>
                  <div>
                    <h4 className='contents-page-number'>1</h4>
                  </div>
                </div>
              </li>
              <li>
                <div className='container-flex-row'>
                  <div>
                    <h5 className='contents-item'>Timeline Summary</h5>
                  </div>
                  <div>
                    <h5 className='contents-page-number'>1</h5>
                  </div>
                </div>
              </li>
              <li>
                <div className='container-flex-row'>
                  <div>
                    <h5 className='contents-item'>Daily Diary</h5>
                  </div>
                  <div>
                    <h5 className='contents-page-number'>1</h5>
                  </div>
                </div>
              </li>
              <li>
                <div className='container-flex-row'>
                  <div>
                    <h5 className='contents-item'>Diagnosis</h5>
                  </div>
                  <div>
                    <h5 className='contents-page-number'>1</h5>
                  </div>
                </div>
              </li>
              <li>
                <div className='container-flex-row'>
                  <div>
                    <h5 className='contents-item'>Drug Log</h5>
                  </div>
                  <div>
                    <h5 className='contents-page-number'>1</h5>
                  </div>
                </div>
              </li>
              <li>
                <div className='container-flex-row'>
                  <div>
                    <h5 className='contents-item'>Event Log</h5>
                  </div>
                  <div>
                    <h5 className='contents-page-number'>1</h5>
                  </div>
                </div>
              </li>
              <li>
                <div className='container-flex-row bdr-bottom-gray'>
                  <div className=''>
                    <h4 className='contents-item'>Thanks</h4>
                  </div>
                  <div>
                    <h4 className='contents-page-number'>1</h4>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </Fragment>
      )
    },
    {
      id: 1,
      sectionName: 'Text Content',
      article: (
        <Fragment>
          <article id='Introduction'>
            <h1>Section 1</h1>
            <h3>It started in an Ambulance... </h3>

            <p>
              Recently I found myself in an ambulance travelling across Thailand
              with a suspected heart attack. This was just the beginning of a
              journey which took me to three hospitals in three countries. At
              the same time my uncle was about to be released from hospital with
              a dangerous condition that only through his management of the
              situation was prevented.
            </p>

            <p>
              I was prepared to feel sick and scared about my illness, but was
              not prepared for a host of other difficulties I would experience
              while in hospital. After speaking with my uncle and others, I
              could see that the problems I experienced were shared by many.{' '}
            </p>

            <p>
              The last thing I wanted to do was think through problems and
              create solutions while I was in hospital, but eventually I started
              to figure things out and get organised. As I progressed in setting
              up systems and managing things, management of my stay became much
              easier.
            </p>
            <p>
              Now I have done the work, at least I know that next time my stay
              will much easier to manage. I hope others can benefit from my work
              as well. This is the reason I wrote this book.
            </p>
          </article>
          <article id='Purpose'>
            <h3>The Purpose of this book</h3>
            <p>
              The purpose of this book is to reduce the amount of things you
              need to remember or manage when you are in hospital. That way you
              can focus on rest whilst feeling your recovery is moving in the
              right direction.
            </p>

            <p>
              The book design is based on my experience and feedback from
              patients and healthcare professionals.{' '}
            </p>

            <p>
              {' '}
              <h3>What it is?</h3>
              <strong>Simple: </strong> It should take 10 mins or less of simple
              reading before you can get started.
            </p>
            <p>
              <strong>An Organiser: </strong>All you need is a pen to start
              managing things more effectively.
            </p>

            <p>
              <h3>What is it not?</h3>A reference book or information source
            </p>
            <p>A guide to health care or a medical document.</p>
          </article>
          <article id='Introduction'>
            <h3>How to use this book</h3>
            <p>
              The book is split into sections. The sections contain worksheets
              and guides you to walk you through what you have to do to make
              organising your time in hospital as easy as possible.
            </p>

            <p>The sections are below;</p>
            <ul>
              <li className='bullets'>
                Section 1
                <ul>
                  <li className='bullets-indented'>Advice Using the book</li>
                  <li className='bullets-indented'>
                    Advice for your Hospital Stay
                  </li>
                </ul>
              </li>
              <li className='bullets'>
                Section 2
                <ul>
                  <li className='bullets-indented'>
                    Worksheets to help you stay organized
                  </li>
                  <ul>
                    <li className='bullets-indented-2'>Event Timeline</li>
                    <li className='bullets-indented-2'>Daily Diary</li>
                    <li className='bullets-indented-2'>Diagnosis </li>
                    <li className='bullets-indented-2'>Drug Log</li>
                    <li className='bullets-indented-2'>Event Log</li>
                  </ul>
                  <li className='bullets-indented'>
                    Worksheets to help you stay organized
                  </li>
                </ul>
              </li>
            </ul>
          </article>

          <article id='Introduction'>
            <h4>Advice for your Hospital Stay</h4>

            <p>This contains;</p>
            <ul>
              <li>Some handy items to make your stay easier.</li>
              <li>
                Some information to write down to prevent repeating yourself.
              </li>
              <li>
                Some tips on how to update friends and family and manage doctors
                meetings.
              </li>
            </ul>

            <h4>Diary Section</h4>
            <p>
              This contains everything you need to document your stay in
              hospital, it contains the following sections;
            </p>
            <h4>Timeline Summary</h4>
            <p className='subHeading3-text'>
              Intended for you to summarise the main events during your illness
              to make it easier to communicate with staff about what has
              happened.
            </p>
            <h4>The Daily Diary</h4>
            <p className='subHeading3-text'>
              This is a one page per day diary, there is enough pages for 30
              days. It can be useful to gain perspective on your experience or
              help if there are difficulties in treatment or diagnosis. For each
              day there is also a space for the Doctors meeting notes for
              questions and answers for the doctor.
            </p>
          </article>
          <article id='Introduction'>
            <h1>Diagnosis Section</h1>
            <p>
              This section is most useful if your condition is not clear or your
              symptoms change. If that is the case then you can build a
              comprehensive record here which may make diagnosis easier.
            </p>
            <h1>Release Section</h1>
            <p>
              This includes advice on how to best manage your release from
              hospital
            </p>
            <h1>Extras Section</h1>
            <p>
              Additional worksheets and resources that you might also find
              useful{' '}
            </p>
            <ul>
              <li>Drug Log</li>
              <li>Events Prior to Illness log</li>
              <li>Internet resources</li>
            </ul>
          </article>
          <section id='content'>
            <p class='pageHeading'>Start Here</p>
            <p>
              The earlier you can read and start working through these items,
              the easier you will find things
            </p>
            <p class='section-intro-text'></p>
            <p className='subHeading3'>1. Buy or get some items</p>
            <p className='subHeading3-text'>
              Some items can make your stay <strong>a lot</strong> more
              bearable. In this book there is a checklist that I and others have
              found useful during our stay.
            </p>
            <p className='subHeading3'>2. Record Basic Information</p>
            <p className='subHeading3-text'>
              At hospital you can be asked the same questions over and over. It
              will make it easier if you log common answers to some common
              questions here.
            </p>
            <p className='subHeading3'>3. Key Jobs - Get Help vs DIY</p>
            <p className='subHeading3-text'>
              Clearly if you are in hospital you are not at your best! If you
              can have some tasks done by friends and family it would be a big
              help. Sometime though, that may not be possible and in that case
              you need a plan b.
            </p>
          </section>
          <section id='content' class='contents-table'>
            <p class='pageHeading'>Item Checklist</p>
            <p>A few items that could help you stay</p>
            <ul>
              <li>
                Electrical Items
                <ul>
                  <li>Phone</li>
                  <li>Phone Charger</li>
                  <li>Laptop or iPad</li>
                </ul>
              </li>
              <li>
                Get better sleep
                <ul>
                  <li>Face-mask</li>
                  <li>Earplugs</li>
                </ul>
              </li>
              <li>
                Bring some clothes
                <ul>
                  <li>Loose fitting underwear</li>
                  <li>T-shirts</li>
                  <li>Track suit bottoms</li>
                </ul>
              </li>
              <li>
                Some food
                <ul>
                  <li>Cereal bars</li>
                  <li>Chocolate</li>
                </ul>
              </li>
              <li>
                Stationary
                <ul>
                  <li>Pen</li>
                  <li>Paper</li>
                </ul>
              </li>
            </ul>
          </section>
          <section id='content' class='contents-table'>
            <p class='pageHeading'>Useful Information</p>
            <p>
              If you are asked for information, just go to this book afterwards
              and fill it in. That way you won't have to do it again.
            </p>
            <div class=''>
              <row className='row-empty'></row>
              <row className='row-inline-headers row-height border-gray '>
                <div className='row-header width2'>
                  <p className=' row-header-text'>Hospital Number</p>
                </div>
              </row>

              <row className='row-inline-headers row-height-header border-gray '>
                <div className='row-header width2 '>
                  <p className=' row-header-text'>
                    Existing Medical conditions
                  </p>
                </div>
              </row>
              <row className='row-inline-headers row-height border-gray '>
                <div className='row-header width2'>
                  <p className=' row-header-text'>Insurance details</p>
                </div>
              </row>
              <row className='row-inline-headers row-height border-gray '>
                <div className='row-header width2'>
                  <p className=' row-header-text'>Next of Kin </p>
                </div>
              </row>
              <row className='row-inline-headers row-height border-gray '>
                <div className='row-header width2'>
                  <p className=' row-header-text'>
                    Hospital Ward Contact Details
                  </p>
                </div>
              </row>
              <row className='row-inline-headers row-height border-gray '>
                <div className='row-header width2'>
                  <p className=' row-header-text'>
                    Wifi password and username for ward
                  </p>
                </div>
              </row>
              <row className='row-inline-headers row-height border-gray '>
                <div className='row-header width2'>
                  <p className=' row-header-text'></p>
                </div>
              </row>
              <row className='row-inline-headers row-height border-gray '>
                <div className='row-header width2'>
                  <p className=' row-header-text'></p>
                </div>
              </row>
              <row className='row-inline-headers row-height border-gray '>
                <div className='row-header width2'>
                  <p className=' row-header-text'></p>
                </div>
              </row>
              <row className='row-inline-headers row-height border-gray '>
                <div className='row-header width2'>
                  <p className=' row-header-text'></p>
                </div>
              </row>
            </div>
          </section>
          <section id='content' class='contents-table'>
            <div class=''>
              <row className='row-empty'></row>
              <row className='row-inline-headers row-height border-gray '>
                <div className='row-header width2'>
                  <p className=' row-header-text'></p>
                </div>
              </row>

              <row className='row-inline-headers row-height border-gray '>
                <div className='row-header width2'>
                  <p className=' row-header-text'></p>
                </div>
              </row>
              <row className='row-inline-headers row-height border-gray '>
                <div className='row-header width2'>
                  <p className=' row-header-text'></p>
                </div>
              </row>
              <row className='row-inline-headers row-height border-gray '>
                <div className='row-header width2'>
                  <p className=' row-header-text'> </p>
                </div>
              </row>
              <row className='row-inline-headers row-height border-gray '>
                <div className='row-header width2'>
                  <p className=' row-header-text'></p>
                </div>
              </row>
              <row className='row-inline-headers row-height border-gray '>
                <div className='row-header width2'>
                  <p className=' row-header-text'></p>
                </div>
              </row>
              <row className='row-inline-headers row-height border-gray '>
                <div className='row-header width2'>
                  <p className=' row-header-text'></p>
                </div>
              </row>
              <row className='row-inline-headers row-height border-gray '>
                <div className='row-header width2'>
                  <p className=' row-header-text'></p>
                </div>
              </row>
              <row className='row-inline-headers row-height border-gray '>
                <div className='row-header width2'>
                  <p className=' row-header-text'></p>
                </div>
              </row>
              <row className='row-inline-headers row-height border-gray '>
                <div className='row-header width2'>
                  <p className=' row-header-text'></p>
                </div>
              </row>
              <row className='row-inline-headers row-height border-gray '>
                <div className='row-header width2'>
                  <p className=' row-header-text'></p>
                </div>
              </row>
              <row className='row-inline-headers row-height border-gray '>
                <div className='row-header width2'>
                  <p className=' row-header-text'></p>
                </div>
              </row>
              <row className='row-inline-headers row-height border-gray '>
                <div className='row-header width2'>
                  <p className=' row-header-text'></p>
                </div>
              </row>
            </div>
          </section>
          <section id='content' class='contents-table'>
            <p class='pageHeading'>Managing People</p>
            <p>
              During your stay there are two key tasks you will have to manage.
            </p>
            <ul>
              <li>Updating friends and family</li>
              <li>Managing the Doctor Whirlwind</li>
            </ul>

            <p className='subHeading2 mgn-top'>Updating friends and family</p>
            <p>
              Depending on your location and who needs updating providing
              updates on your condition can be hard work. If you are unclear or
              incorrect it can lead to a lot of extra time and stress clarifying
              things. For everyones well being it is important that this is done
              quickly and effectively.
            </p>

            <p>
              A good way of providing updates is a group text, email or whatsapp
              message sent out daily. You should also let at least one person
              know how they can contact the hospital ward directly to get
              updates if you are unavailable.
            </p>

            <p>
              A better way, if you can, is to have someone else handle the
              communication and send out daily updates on your behalf.{' '}
            </p>
          </section>
          <section id='content' class='contents-table'>
            <p class='pageHeading'>Managing Doctor Whirlwind</p>
            <p>
              Doctors are very busy and it is common for doctors to see you
              briefly and after that they may be unavailable for the rest of the
              day. It is easy to finish chatting with a doctor wishing you'd
              asked something else or forget what was said. This is where a
              system can help you.
            </p>

            <p>
              <strong>The best system </strong>
              Use the "Doctors meetings notes" section of the diary in this book
              to prepare for the meeting beforehand and then use it to ensure
              you don't forget the answers.
            </p>
            <p>
              <strong>Getting help from friends or family: </strong>
              For important meetings having someone attend in person or by phone
              can be very helpful to ensure the right questions are asked and
              correct notes are taken. This could be someone you know or a
              professional. If you have someone in mind it is a good idea to ask
              them now before you need them.
            </p>

            <p>
              <strong>Getting help from a patients advocate:</strong>
              Patients advocates are professionals that can help you to
              understand the doctor and ask questions on your behalf. Depending
              on where you are they may be offered for free or be hired
              privately.
            </p>
          </section>
        </Fragment>
      )
    }
  ]
};

export default SectionOneData;
