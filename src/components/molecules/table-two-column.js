import React, { Fragment } from 'react';

export default function(props) {
  const sectionNumber = props.sectionNumber;
  const tableData = props.data[sectionNumber].tableData;


  let tableRender = tableData.map((item, key) => {
    return(
          <li>{item.c1}</li>

          

     

    )

  });
console.log(tableRender)
  return <Fragment>

    
  </Fragment>;
}
