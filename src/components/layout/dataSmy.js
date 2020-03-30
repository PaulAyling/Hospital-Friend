import React, { Fragment } from 'react';

export default function(props) {
  const elementsRender = props.data.map(elements => {
    return (
   
    <div className=' container-flex-row'>
        <div >
        {elements.sectionName}
        </div>
    </div>
    )
  });
  return <section className='new-page border-lightgray'>
  {elementsRender}
  
  
  </section>;
}
