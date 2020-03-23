import React from 'react';

class TableTwoColumn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const sectionNumber = this.props.sectionNumber;
    const currentData = this.props.data[sectionNumber]
    const elementsRender = currentData.tableData.map(elements => {
      return (
        <div className='container-flex-row border-lightgray'>
          <div className={'table-side-header gray container-flex-width-'+currentData.tableStyleCol1}>
          {elements.c1}
          </div>
          <div></div>
        </div>
      );
    });
    return <h1>{elementsRender}</h1>;
  }
}

export default TableTwoColumn;
