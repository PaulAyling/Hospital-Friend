import React, { Fragment } from 'react';
import Book from '../components/layout/book';

const RenderMobi = props => {
  return (
    <Fragment>

      <Book
        bookFormat='mobi'
        data={props.data}
      />
    </Fragment>
  );
};
export default RenderMobi;
