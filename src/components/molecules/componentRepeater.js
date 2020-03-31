import React, { Fragment } from 'react';
import Timeline from '../layout/page-table-two-column'
import PageTableTwoColumn from '../layout/page-table-two-column'

export default function(props) {
  //Bring in the component and number of repeats
  const ChildrenComponent = props.childrenComponent
  const Repeats = props.repeats
  
  const myLoop = (loopNumber) => {
    return [...new Array(loopNumber)].map((i, index) => (
      <ChildrenComponent
        key={i}
        bookFormat={props.bookFormat} 
        data={props.data}  
      />
    ));
  };
// Create pages render
  const dayByDayPages = myLoop(Repeats);

  return (
<Fragment>
  {dayByDayPages}
</Fragment>
  );
}
