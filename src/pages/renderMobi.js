import React, {Fragment} from 'react';
import SectionOne from '../components/layout/section-one';


const RenderMobi = (props) => {
  const Data = props.data;
  const render = props.Render
  return (
    <main id="mobi-render" className="container-render-mobi">

      <SectionOne render={render} data={Data} />
    </main>
  );
};
export default RenderMobi;
