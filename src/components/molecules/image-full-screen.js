import React from 'react';


export default function(props) {
  return (
    <img
    className={'page-size-'+props.pageSize}
    src={props.data[props.sectionNumber].article}
    alt={props.data[props.sectionNumber].article}
  />
  );
}
