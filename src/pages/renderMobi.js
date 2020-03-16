import React, {Fragment} from 'react';
import SectionOne from '../components/layout/section-one';


const RenderMobi = (props) => {
  const sectionOneData = props.SectionOneData;
  const render = props.Render
  return (
    <Fragment>
      <SectionOne render={render} content={sectionOneData} />
    </Fragment>
  );
};
export default RenderMobi;
