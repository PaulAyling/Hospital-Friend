import React, { Fragment } from 'react';
const SectionOneData = [
  {
    id: 0,
    sectionNumber: 0,
    ChapterNumber: 1,
    articleNumber: 1,
    sectionName: 'Styling Template',
    containerStyling: '',
    article: (
      <Fragment>
        <h1>Contains examples of all styling text & some components</h1>
        <h1>Heading 1 (Chapter Headings)</h1>
        <h2>Heading 2 (Page Headings)</h2>
        <h3>Heading 3 (Page sub Headings)</h3>
        <h4>Heading 4 (Chapter sub sub Headings)</h4>
        <h5>Heading 5 (Chapter sub sub sub Headings)</h5>
        <p>This is some paragraph text</p>
        <ul>
          <li>A list item</li>
          <li>A list item</li>
          <li>A list item</li>
        </ul>
      </Fragment>
    )
  },
  {
    id: 0,
    sectionNumber: 0,
    ChapterNumber: 5,
    articleNumber: 1,
    sectionName: 'Front Cover',
    containerStyling: '',
    article:
      'http://paulayling.me/wp-content/uploads/2019/02/hHandbookCover.png'
  },

  {
    id: 2,
    sectionNumber: 0,
    ChapterNumber: 6,
    articleNumber: 1,
    sectionName: 'Section 1: Contents',
    containerStyling: 'padding-3 ',
    article: (
      <section className=''>
        <h1 className=''>Contents</h1>
        <ul>
          <li>
            <div>
              <h3 className='contents-section'>Section 1</h3>
            </div>
          </li>
          <li>
            <div className='container-flex-row bdr-bottom-gray '>
              <div>
                <h4 className='contents-item'>It Started in an Ambulance</h4>
              </div>
              <div>
                <h4 className='contents-page-number'>1</h4>
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
                <h4 className='contents-item'>Advice for your Hospital Stay</h4>
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
              <h3 className='contents-section'>Section 2</h3>
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
    )
  },
  {
    id: 3,
    sectionNumber: 1,
    ChapterNumber: 1,
    articleNumber: 1,
    sectionName: 'Section 1: Divider',
    article: (
      <section>
        <div className='container-book-divider container-flex-column-spacebetween'>
          <h1>Section 1</h1>
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
    id: 4,
    sectionNumber: 1,
    ChapterNumber: 2,
    articleNumber: 1,
    sectionName: 'Section 1: It Started with an Ambulance',
    article: (
      <Fragment>
        <h2>It started in an Ambulance... </h2>

        <p>
          Recently I found myself in an ambulance travelling across Thailand
          with a suspected heart attack. This was just the beginning of a
          journey which took me to three hospitals in three countries. At the
          same time my uncle was about to be released from hospital with a
          dangerous condition that only through his management of the situation
          was prevented.
        </p>

        <p>
          I was prepared to feel sick and scared about my illness, but was not
          prepared for a host of other difficulties I would experience while in
          hospital. After speaking with my uncle and others, I could see that
          the problems I experienced were shared by many.{' '}
        </p>

        <p>
          The last thing I wanted to do was think through problems and create
          solutions while I was in hospital, but eventually I started to figure
          things out and get organised. As I progressed in setting up systems
          and managing things, management of my stay became much easier.
        </p>
        <p>
          Now I have done the work, at least I know that next time my stay will
          much easier to manage. I hope others can benefit from my work as well.
          This is the reason I wrote this book.
        </p>
      </Fragment>
    )
  },
  {
    id: 5,
    sectionNumber: 1,
    ChapterNumber: 3,
    articleNumber: 1,
    sectionName: 'Section 1: About this book',
    article: (
      <Fragment>
        <h2>About This Book</h2>
        <h3>The Purpose of this book</h3>
        <p>
          The purpose of this book is to reduce the amount of things you need to
          remember or manage when you are in hospital. That way you can focus on
          rest whilst feeling your recovery is moving in the right direction.
        </p>

        <p>
          The book design is based on my experience and feedback from patients
          and healthcare professionals.{' '}
        </p>

        <p>
          {' '}
          <h3>What it is?</h3>
          <strong>Simple: </strong> It should take 10 mins or less of simple
          reading before you can get started.
        </p>
        <p>
          <strong>An Organiser: </strong>All you need is a pen to start managing
          things more effectively.
        </p>

        <p>
          <h3>What is it not?</h3>A reference book or information source
        </p>
        <p>A guide to health care or a medical document.</p>

        <h2>How to use this book</h2>
        <p>
          The book is split into sections. The sections contain worksheets and
          guides you to walk you through what you have to do to make organising
          your time in hospital as easy as possible.
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
              <li className='bullets-indented'>Extra resources</li>
            </ul>
          </li>
        </ul>

        <h4>Section 1</h4>
        <p>
          {' '}
          <strong>Advice on how to use this book </strong>How to use what parts
          of this book
        </p>
        <p>
          <strong>Advice for your Hospital Stay </strong>This is a small section
          designed to give you advice on what to expect and how to manage in
          Hospital
        </p>
        <h4>Section 2</h4>
        <p>
          {' '}
          <strong>Event Timeline </strong>Intended for you to summarise the main
          events during your illness to make it easier to communicate with staff
          about what has happened.
        </p>
        <p>
          {' '}
          <strong>Daily Diary</strong>This is a one page per day diary, there is
          enough pages for 30 days. It can be useful to gain perspective on your
          experience or help if there are difficulties in treatment or
          diagnosis. For each day there is also a space for the Doctors meeting
          notes for questions and answers for the doctor.{' '}
        </p>
        <p>
          {' '}
          <strong>Diagnosis</strong> This section is most useful if your
          condition is not clear or your symptoms change. If that is the case
          then you can build a comprehensive record here which may make
          diagnosis easier.
        </p>
        <p>
          {' '}
          <strong>Drug log</strong>Tables for you to record your medication{' '}
        </p>
        <p>
          {' '}
          <strong>Extra Resources </strong>Other materials that may be helpful
        </p>
      </Fragment>
    )
  },
  {
    id: 6,
    sectionNumber: 1,
    ChapterNumber: 4,
    articleNumber: 1,
    sectionName: 'Section 1: Advice For Your Hospital Stay',
    containerStyling: '',
    article: (
      <Fragment>
        <h2>Advice for your Hospital Stay</h2>
        <p>
          Whilst in hopital there are a few things that can be easier if you
          know what expect in hospital and some good approaches.
        </p>
      </Fragment>
    )
  },
  {
    id: 7,
    sectionNumber: 1,
    ChapterNumber: 4,
    articleNumber: 2,
    sectionName: 'Section 1: Advice For your Hospital Stay > Things To bring',
    containerStyling: '',
    article: (
      <Fragment>
        <h2>Item Checklist</h2>
        <p>A few items that could help you stay</p>
        <ul>
          <li className='bullets'>
            Electrical Items
            <ul>
              <li className='indented-2 '>
                <i class='large material-icons'>check_box_outline_blank</i>{' '}
                Phone
              </li>
              <li className='indented-2'>
                <i class='large material-icons'>check_box_outline_blank</i>
                Phone Charger
              </li>
              <li className='indented-2'>
                <i class='large material-icons'>check_box_outline_blank</i>
                Laptop or iPad
              </li>
            </ul>
          </li>
          <li className='bullets'>
            Get better sleep
            <ul>
              <li className='indented-2'>
                <i class='large material-icons'>check_box_outline_blank</i>
                Face-mask
              </li>
              <li className='indented-2'>
                <i class='large material-icons'>check_box_outline_blank</i>
                Earplugs
              </li>
            </ul>
          </li>
          <li className='bullets'>
            Bring some clothes
            <ul>
              <li className='indented-2'>
                <i class='large material-icons'>check_box_outline_blank</i>
                Loose fitting underwear
              </li>
              <li className='indented-2'>
                <i class='large material-icons'>check_box_outline_blank</i>
                T-shirts
              </li>
              <li className='indented-2'>
                <i class='large material-icons'>check_box_outline_blank</i>
                Track suit bottoms
              </li>
            </ul>
          </li>
          <li className='bullets'>
            Some food
            <ul>
              <li className='indented-2'>
                <i class='large material-icons'>check_box_outline_blank</i>
                Cereal bars
              </li>
              <li className='indented-2'>
                <i class='large material-icons'>check_box_outline_blank</i>
                Chocolate
              </li>
            </ul>
          </li>
          <li className='bullets'>
            Stationary
            <ul>
              <li className='indented-2'>
                <i class='large material-icons'>check_box_outline_blank</i>
                Pen
              </li>
              <li className='indented-2'>
                <i class='large material-icons'>check_box_outline_blank</i>
                Paper
              </li>
            </ul>
          </li>
        </ul>
      </Fragment>
    )
  },
  {
    id: 8,
    sectionNumber: 1,
    ChapterNumber: 4,
    articleNumber: 3,
    sectionName: 'Advice For you Hospital Stay > Managing People',
    containerStyling: '',
    article: (
      <Fragment>
        <h2>Managing people</h2>
        <p>
          During your stay you will have to keep your friends and family updated
          and also be talking to doctors.
        </p>

        <h4>Updating friends and family</h4>
        <p>
          Depending on your location and who needs updating providing updates on
          your condition can be hard work. If you are unclear or incorrect it
          can lead to a lot of extra time and stress clarifying things. For
          everyones well being it is important that this is done quickly and
          effectively.
        </p>

        <p>
          A good way of providing updates is a group text, email or whatsapp
          message sent out daily. You should also let at least one person know
          how they can contact the hospital ward directly to get updates if you
          are unavailable.
        </p>

        <p>
          A better way, if you can, is to have someone else handle the
          communication and send out daily updates on your behalf.{' '}
        </p>
      </Fragment>
    )
  },
  {
    id: 9,
    sectionNumber: 1,
    ChapterNumber: 4,
    articleNumber: 4,
    sectionName: 'Section 1: Advice For you Hospital Stay > Leaving Hospital',
    containerStyling: '',
    article: (
      <Fragment>
        <h2>Managing your release from hospital</h2>
        <p>
          The doctor has made the decision to have you leave hospital. In this
          section I explain what the release process often looks like and what
          are some of the best things to do and watch for when you are being
          released.
        </p>
        <h2>The release process</h2>
        <p>It normally goes something like this</p>
        <ul>
          <li>
            You have a meeting with a senior doctor or specialist (release
            meeting) to cover off questions and explain the reason for release.
          </li>
          <li>Paperwork is then filled in</li>
          <li>You pick up paper work</li>
          <li>You make your way home</li>
        </ul>

        <h2>About after your stay in Hospital</h2>

        <p>
          Depending on your current symptoms and network how you are going to
          manage after hospital can be daunting. If you are concerned this
          should also be discussed in the release meeting.
        </p>

        <p>
          Usually on the day of your release you will have a meeting with a
          doctor. To help you with this is enclosed is a checklist, it may also
          be useful to have another person present in this meeting. Use a diary
          page to write down important questions before the meeting. You may or
          may not be told that this is going to happen so you will need to be
          prepared for it.
        </p>

        <h2>Release Meeting Checklist</h2>
        <ul>
          <li>
            If you have chosen to have another person attend ensure you both
            know when its is schedules to occur
          </li>
          <li>
            After reading these pages write down all your questions so you are
            prepared for the meeting
          </li>
        </ul>

        <h2>The Release Meeting Questions</h2>
        <p>
          <b>Some example questions below</b>
        </p>
        <p>
          If you can it is best to ensure your questions are written down and
          then you attempt to write down the answers as you talk to the doctor
          to ensure you don't forget.
        </p>
        <ul>
          <li>The causes of symptoms are fully explained</li>
          <li>
            Will I make a full recovery and what will the timeline look like?
          </li>
          <li>What symptoms should I see improving first?</li>
          <li>
            Are there any particular symptoms should I look for and what should
            I do if I see them?
          </li>
          <li>What level of rest is required?</li>
          <li>Is there anything else I can do to improve recovery?</li>
        </ul>
        <ul>
          <li>
            Is there anything further you need to organize with your doctor -
            such as follow up?
          </li>
          <li>What (if any) drugs you need to take and when</li>
          <li>What (if any) any special precuations you need to take</li>
        </ul>
      </Fragment>
    )
  }
];

export default SectionOneData;
