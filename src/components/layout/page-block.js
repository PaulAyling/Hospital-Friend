import React, { Fragment } from 'react';

export default function(props) {

  return (
<section id={props.data[0].sectionName}  className='padding-3-large-top'>
    <header>{props.data[0].sectionName}</header>
    {props.data[0].article} 
    </section>
  );
}
