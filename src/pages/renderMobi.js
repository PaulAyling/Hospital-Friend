import React, { Fragment } from 'react';
import Book from '../components/layout/book';

const RenderMobi = props => {
  return (
    <Fragment>
      <Book
        pageSize='page-size-mobi'
        pageWidth='page-width-moby'
        data={props.data}
      />
    </Fragment>
  );
};
export default RenderMobi;
