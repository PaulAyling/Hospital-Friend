import React, { Component, Fragment } from 'react'

export default class sandbox extends Component {


  render() {
    return (
      <Fragment>
      <div ID="section1" className='container-new-section '>
      <h1>Heading 1 </h1>  
      </div>
      
      <div ID="section1" className='container-new-section'>
      <h1>Heading 2 </h1>
      </div>
      
      <div ID="section1" className='container-new-section'>
      <h1>Heading 3 </h1>
      </div>
      </Fragment>
      
    )
  }
}
