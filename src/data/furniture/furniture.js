import React, { Fragment } from 'react';
const Furniture = [
  {
    id: 0,
    sectionNumber: 0,
    ChapterNumber: 1,
    articleNumber: 1,
    sectionName: 'Styling Template',
    containerStyling: '',
    article: (
      <Fragment>
        <h1>Contains examples of all styling text & some components</h1>
        <h1>Heading 1 (Chapter Headings)</h1>
        <h2>Heading 2 (Page Headings)</h2>
        <h3>Heading 3 (Page sub Headings)</h3>
        <h4>Heading 4 (Chapter sub sub Headings)</h4>
        <h5>Heading 5 (Chapter sub sub sub Headings)</h5>
        <p>This is some paragraph text</p>
        <ul>
          <li>A list item</li>
          <li>A list item</li>
          <li>A list item</li>
        </ul>
      </Fragment>
    )
  },
  {
    id: 0,
    sectionNumber: 0,
    ChapterNumber: 5,
    articleNumber: 1,
    sectionName: 'Front Cover',
    containerStyling: '',
    article:
      'http://paulayling.me/wp-content/uploads/2019/02/hHandbookCover.png'
  },
  {
    id: 3,
    sectionNumber: 1,
    ChapterNumber: 1,
    articleNumber: 1,
    sectionName: 'Section 1: Divider',
    article: (
      <section>
        <div className='container-book-divider container-flex-column-spacebetween'>
          <h1>Section 1</h1>
          <img
            className='container-book-divider-img'
            src='http://paulayling.me/wp-content/uploads/2019/02/hhandbook-Section-Divider.jpg'
            alt='Section 2 divider'
          />
        </div>
      </section>
    )
  },
  {
    id: 3,
    sectionNumber: 2,
    ChapterNumber: 1,
    articleNumber: 1,
    sectionName: 'Section 2: Divider',
    article: (
      <section>
        <div className='container-book-divider container-flex-column-spacebetween'>
          <h1>Section 2</h1>
          <img
            className='container-book-divider-img'
            src='http://paulayling.me/wp-content/uploads/2019/02/hhandbook-Section-Divider.jpg'
            alt='Section 2 divider'
          />
        </div>
      </section>
    )
  },
];

export default Furniture;
