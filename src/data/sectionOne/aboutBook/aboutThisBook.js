import React, { Fragment } from 'react';
const AboutBook = [

  {
    id: 5,
    fileName:'aboutThisBook',
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

     
          <h3>What it is?</h3>
             <p>
          {' '}<strong className='text-center'>Simple: </strong> 
         It should take 10 mins or less of simple
          reading before you can get started.
        </p>
        <p>
          <strong>An Organiser: </strong>All you need is a pen to start managing
          things more effectively.
        </p>

        <p>
          <h3>What is it not?</h3>
          A reference book or information source
        </p>
        <p>A guide to health care or a medical document.</p>

        <h2 className='pagebreak-inline'>How to use this book</h2>
        <p>
          The book is split into sections. The sections contain worksheets and
          guides you to walk you through what you have to do to make organising
          your time in hospital as easy as possible.
        </p>

        <p>The sections are below;</p>
        <h4>Section 1</h4>
        <p>
          {' '}
          <strong>Advice on how to use this book: </strong>How to use what parts
          of this book
        </p>
        <p>
          <strong>Advice for your Hospital Stay: </strong>This is a small section
          designed to give you advice on what to expect and how to manage in
          Hospital
        </p>
        <h4>Section 2</h4>
        <p>
          {' '}
          <strong>Event Timeline: </strong>Intended for you to summarise the main
          events during your illness to make it easier to communicate with staff
          about what has happened.
        </p>
        <p className='pagebreak-inline'>
          {' '}
          <strong>Daily Diary:</strong>This is a one page per day diary, there is
          enough pages for 30 days. It can be useful to gain perspective on your
          experience or help if there are difficulties in treatment or
          diagnosis. For each day there is also a space for the Doctors meeting
          notes for questions and answers for the doctor.{' '}
        </p>
        <p >
          {' '}
          <strong>Diagnosis:</strong> This section is most useful if your
          condition is not clear or your symptoms change. If that is the case
          then you can build a comprehensive record here which may make
          diagnosis easier.
        </p>
        <p>
          {' '}
          <strong>Drug log: </strong>Tables for you to record your medication{' '}
        </p>
        <p>
          {' '}
          <strong>Extra Resources: </strong>Other materials that may be helpful
        </p>
      </Fragment>
    )
  },
  
];


export default AboutBook;