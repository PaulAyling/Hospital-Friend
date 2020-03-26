import React from 'react';

class Questions extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const currentData = this.props.data[0]
    console.log(JSON.stringify(currentData))
    const elementsRender = currentData.tableData.map(elements => {
      return (
        <div className='container-flex-row border-lightgray'>
          <div className={'table-side-header lightgray container-flex-width-' + currentData.tableStyleCol1}>
          {elements.c1}
          </div>
          <div></div>
        </div>
      );
    });
    return <h1>{elementsRender}</h1>;
  }
}

export default import React from 'react';

class TableTwoColumn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
   
    return <h1>Questions</h1>;
  }
}

export default TableTwoColumn;
;
