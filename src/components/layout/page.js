import React, { Fragment } from 'react';

export default function(props) {

  // const intId = parseInt(id);


  return (
    <section  id={'page.js: '+props.description} className='padding-3-large-top container-single-page' >

   {props.data[props.sectionNumber].article}
    </section>
  );
}
