import React, { Fragment } from 'react';
const ItemChecklist = [
  {
    id: 7,
    sectionNumber: 1,
    ChapterNumber: 4,
    articleNumber: 2,
    sectionName: 'Section 1: Advice For your Hospital Stay > Things To bring',
    containerStyling: '',
    article: (
      <Fragment>
        <h2>Item Checklist</h2>
        <p>A few items that could help you stay</p>
        <ul>
          <li className='bullets'>
            Electrical Items
            <ul>
              <li className='indented-2 '>
                <i class='large material-icons'>check_box_outline_blank</i>{' '}
                Phone
              </li>
              <li className='indented-2'>
                <i class='large material-icons'>check_box_outline_blank</i>
                Phone Charger
              </li>
              <li className='indented-2'>
                <i class='large material-icons'>check_box_outline_blank</i>
                Laptop or iPad
              </li>
            </ul>
          </li>
          <li className='bullets'>
            Get better sleep
            <ul>
              <li className='indented-2'>
                <i class='large material-icons'>check_box_outline_blank</i>
                Face-mask
              </li>
              <li className='indented-2'>
                <i class='large material-icons'>check_box_outline_blank</i>
                Earplugs
              </li>
            </ul>
          </li>
          <li className='bullets'>
            Bring some clothes
            <ul>
              <li className='indented-2'>
                <i class='large material-icons'>check_box_outline_blank</i>
                Loose fitting underwear
              </li>
              <li className='indented-2'>
                <i class='large material-icons'>check_box_outline_blank</i>
                T-shirts
              </li>
              <li className='indented-2'>
                <i class='large material-icons'>check_box_outline_blank</i>
                Track suit bottoms
              </li>
            </ul>
          </li>
          <li className='bullets'>
            Some food
            <ul>
              <li className='indented-2'>
                <i class='large material-icons'>check_box_outline_blank</i>
                Cereal bars
              </li>
              <li className='indented-2'>
                <i class='large material-icons'>check_box_outline_blank</i>
                Chocolate
              </li>
            </ul>
          </li>
          <li className='bullets'>
            Stationary
            <ul>
              <li className='indented-2'>
                <i class='large material-icons'>check_box_outline_blank</i>
                Pen
              </li>
              <li className='indented-2'>
                <i class='large material-icons'>check_box_outline_blank</i>
                Paper
              </li>
            </ul>
          </li>
        </ul>
      </Fragment>
    )
  }
];

export default ItemChecklist;
