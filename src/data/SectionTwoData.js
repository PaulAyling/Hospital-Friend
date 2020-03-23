import React, { Fragment } from 'react';
import TableTwoColumn from '../components/molecules/table-two-column'
const SectionTwoData =  [
  {
    id: 4,
    description: 'Section 2',
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
  {
    id: 5,
    description: 'Section 2',
    article: (
      <section>
      <h3>Item Checklist</h3>
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
    </section>
    )
  },

  {
    id: 6,
    description: 'Table: My Info',
    article: (
      <Fragment>
   <h1>Your Information</h1>
      </Fragment>
    ),
    tableStyleCol1:'1',
    tableStyleCol2:'3',
    tableData:
      [
        {c1:'Hospital Number',c2:'exaMPLE - WRITE HERE'},
        {c1:'Existing Medical conditions',c2:''},
        {c1:'Insurance details',c2:''},
        {c1:'Hospital Ward Contact Details',c2:''},
        {c1:'Wifi password and username for ward',c2:''},
        {c1:' ',c2:''},
        {c1:' ',c2:''},
        {c1:' ',c2:''},
        {c1:' ',c2:''},
        
 
      ],
      tableType:'TableTwoColum'
  },
  {
    id: 6,
    description: 'Section 2 ',
    article: (
      <Fragment>
        <section>
          <h3>Useful Information</h3>
          <p>
            If you are asked for information, just go to this book afterwards
            and fill it in. That way you won't have to do it again.
          </p>
          <div class=''>
            <row className='container'>
              <div className=''>
                <p className=' row-header-text'>Hospital Number</p>
              </div>
            </row>

            <row className='row-inline-headers row-height-header border-gray '>
              <div className='row-header width2 '>
                <p className=' row-header-text'>
                  Existing Medical conditions
                </p>
              </div>
            </row>
            <row className='row-inline-headers row-height border-gray '>
              <div className='row-header width2'>
                <p className=' row-header-text'>Insurance details</p>
              </div>
            </row>
            <row className='row-inline-headers row-height border-gray '>
              <div className='row-header width2'>
                <p className=' row-header-text'>Next of Kin </p>
              </div>
            </row>
            <row className='row-inline-headers row-height border-gray '>
              <div className='row-header width2'>
                <p className=' row-header-text'>
                  Hospital Ward Contact Details
                </p>
              </div>
            </row>
            <row className='row-inline-headers row-height border-gray '>
              <div className='row-header width2'>
                <p className=' row-header-text'>
                  Wifi password and username for ward
                </p>
              </div>
            </row>
            <row className='row-inline-headers row-height border-gray '>
              <div className='row-header width2'>
                <p className=' row-header-text'></p>
              </div>
            </row>
            <row className='row-inline-headers row-height border-gray '>
              <div className='row-header width2'>
                <p className=' row-header-text'></p>
              </div>
            </row>
            <row className='row-inline-headers row-height border-gray '>
              <div className='row-header width2'>
                <p className=' row-header-text'></p>
              </div>
            </row>
            <row className='row-inline-headers row-height border-gray '>
              <div className='row-header width2'>
                <p className=' row-header-text'></p>
              </div>
            </row>
          </div>
        </section>
        <section id='content' class='contents-table'>
          <div class=''>
            <row className='row-empty'></row>
            <row className='row-inline-headers row-height border-gray '>
              <div className='row-header width2'>
                <p className=' row-header-text'></p>
              </div>
            </row>

            <row className='row-inline-headers row-height border-gray '>
              <div className='row-header width2'>
                <p className=' row-header-text'></p>
              </div>
            </row>
            <row className='row-inline-headers row-height border-gray '>
              <div className='row-header width2'>
                <p className=' row-header-text'></p>
              </div>
            </row>
            <row className='row-inline-headers row-height border-gray '>
              <div className='row-header width2'>
                <p className=' row-header-text'> </p>
              </div>
            </row>
            <row className='row-inline-headers row-height border-gray '>
              <div className='row-header width2'>
                <p className=' row-header-text'></p>
              </div>
            </row>
            <row className='row-inline-headers row-height border-gray '>
              <div className='row-header width2'>
                <p className=' row-header-text'></p>
              </div>
            </row>
            <row className='row-inline-headers row-height border-gray '>
              <div className='row-header width2'>
                <p className=' row-header-text'></p>
              </div>
            </row>
            <row className='row-inline-headers row-height border-gray '>
              <div className='row-header width2'>
                <p className=' row-header-text'></p>
              </div>
            </row>
            <row className='row-inline-headers row-height border-gray '>
              <div className='row-header width2'>
                <p className=' row-header-text'></p>
              </div>
            </row>
            <row className='row-inline-headers row-height border-gray '>
              <div className='row-header width2'>
                <p className=' row-header-text'></p>
              </div>
            </row>
            <row className='row-inline-headers row-height border-gray '>
              <div className='row-header width2'>
                <p className=' row-header-text'></p>
              </div>
            </row>
            <row className='row-inline-headers row-height border-gray '>
              <div className='row-header width2'>
                <p className=' row-header-text'></p>
              </div>
            </row>
            <row className='row-inline-headers row-height border-gray '>
              <div className='row-header width2'>
                <p className=' row-header-text'></p>
              </div>
            </row>
          </div>
        </section>
      </Fragment>
    )
  }
  ]

  export default SectionTwoData;