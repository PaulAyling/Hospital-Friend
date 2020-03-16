import React, {Fragment} from 'react';
import SectionOne from '../components/layout/section-one';
import '../styles/master.scss'

const RenderMobi = (props) => {
  const sectionOneData = props.SectionOneData;
  const render = props.Render
  const i = 1
console.log(JSON.stringify(sectionOneData));
  return (
    <Fragment>
        {/* {sectionOneData[0].section}
        {render} */}

      <SectionOne render="mobi" content={props.sectionOneData} />
    </Fragment>
  );
};

export default RenderMobi;
