import React, {Fragment}  from 'react';
import TableTwoColum from '../molecules/table-two-column';


export default function(props) {
  const ChildrenComponent=props.nextChildComponent
  const data1=props.data1
  const data2=props.data2
  return (
 <Fragment>
   <ChildrenComponent data={props.data1} />
   <ChildrenComponent data={props.data2} />
 </Fragment>   

  );
}