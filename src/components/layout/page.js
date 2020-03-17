import React, { Fragment } from 'react';


export default function(props) {
  const Content = props.content;
  const ContentNumber = parseInt(props.contentNumber);
  return (
        <section className="border-3">
        {Content[ContentNumber].article}
        </section>

  );
}
