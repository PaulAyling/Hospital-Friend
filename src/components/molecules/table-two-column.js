import React, {Fragment} from 'react';

class TableTwoColumn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const currentData = this.props.data[0];
    console.log(JSON.stringify(currentData));

    const elementRender = currentData.tableData.map(elements => {
      return (
        <div className='container-flex-row border-lightgray'>
          <div
            className={
              'table-side-header ' +
              currentData.style +
              ' container-flex-width-' +
              currentData.tableStyleCol1
            }>
            {elements.c1}
          </div>
          <div>{elements.c2}</div>
        </div>
      );
    });
    return (
<Fragment>
      {elementRender}
</Fragment>
    

    );
  }
}

export default TableTwoColumn;
