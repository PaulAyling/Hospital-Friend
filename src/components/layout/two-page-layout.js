import React  from 'react';
import TableTwoColum from '../molecules/table-two-column';


export default function(props) {
  return (
    <section className='container-flex-column'>
      <div
        id={props.data[0].sectionName}
        className={'padding-3 page-size-' + props.bookFormat}>
        <header>{props.data[0].sectionName}</header>
        <h3>{props.data.sectionName}</h3>
        <div className='container-flex-row border-lightgray'>
          <div className='table-side-header lightgray container-flex-width-1 text-align-center'>
            Todays Date
          </div>
          <div className='table-side-header  container-flex-width-3 text-align-center'>
            {' '}
            
          </div>
        </div>
        <TableTwoColum data={props.data} bookFormat={props.bookFormat}/>
      </div>

      
      <div
        id={props.data[0].sectionName}
        className={'padding-3 page-size-' + props.bookFormat}>
        <header>{props.data[0].sectionName}</header>
        <h3>{props.data.sectionName}</h3>
        <div className='container-flex-row border-lightgray'>
          <div className='table-side-header lightgray container-flex-width-1 text-align-center'>
            Todays Date
          </div>
          <div className='table-side-header  container-flex-width-3 text-align-center'>
            {' '}
            
          </div>
        </div>
        <TableTwoColum data={props.data} bookFormat={props.bookFormat}/>
      </div>

    </section>
  );
}
