import React, { Fragment } from 'react';
const Events = [


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
 
];

export default Events;
