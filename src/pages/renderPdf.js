import React, {Fragment}  from 'react';
import Book from '../components/layout/book'



const RenderPdf = (props) => {
  return (
    <Fragment>

      <Book
        bookFormat='pdf'
        data={props.data}
      />
    </Fragment>
  );
};

export default RenderPdf;
