import React, {Fragment} from 'react';
import SectionOne from '../components/layout/section-one';


const RenderMobi = (props) => {
  const Content = props.content;
  const render = props.Render
  return (
    <Fragment>
      <SectionOne render={render} content={Content} />
    </Fragment>
  );
};
export default RenderMobi;
