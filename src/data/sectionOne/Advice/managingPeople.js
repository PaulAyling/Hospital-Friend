import React, { Fragment } from 'react';
const ManagingPeople = [
  
  {
    id: 8,
    sectionNumber: 1,
    ChapterNumber: 4,
    articleNumber: 3,
    sectionName: 'Section1: Advice For you Hospital Stay > Managing People',
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
  }
];

export default ManagingPeople;
