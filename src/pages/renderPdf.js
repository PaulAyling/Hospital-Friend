import React, {Fragment}  from 'react';



const RenderPdf = () => {
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
