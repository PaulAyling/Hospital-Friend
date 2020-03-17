import React, { Fragment } from 'react';

export default function(props) {
  const Content = props.content;
  const ContentNumber = parseInt(props.contentNumber);
  return (
    <Fragment>
      <img
        className='container-img-full'
        src={Content[ContentNumber].article}
        alt={Content[0].sectionName}
      />
    </Fragment>
  );
}
