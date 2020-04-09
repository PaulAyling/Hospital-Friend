import React, { Fragment } from 'react';
import PageBlock from './page-block';
import Page from './page';
import PageNoPaddingImage from './page-nopadding-image';
import DataSmy from '../layout/dataSmy';
import PageTableTwoColumn from './page-table-two-column';
import TwoPageLayout from './two-page-layout';
import ComponentRepeater from '../molecules/componentRepeater';
import Furniture from '../../data/furniture/furniture'

export default function(props) {
  const Data = props.data;
//Furniture
  const divider1 = Data.filter(function(getFile) {
    return getFile.fileName === 'furniture' && getFile.item === 'divider' && getFile.articleNumber === 1;
  });
  const divider2 = Data.filter(function(getFile) {
    return getFile.fileName === 'furniture'  && getFile.item === 'divider' && getFile.articleNumber === 2;
  });
  const stylesExamples = Data.filter(function(getFile) {
    return getFile.fileName === 'furniture'   && getFile.articleNumber === 1;
  });
  const frontCover = Data.filter(function(getFile) {
    return getFile.fileName === 'furniture'   && getFile.articleNumber === 2;
  });
//Contents
  const contents = Data.filter(function(getFile) {
    return getFile.sectionNumber === 0 && getFile.ChapterNumber === 6;
  });
  //Section 1
  const section1Divider = Data.filter(function(getFile) {
    return (
      getFile.sectionNumber === 1 &&
      getFile.ChapterNumber === 1 &&
      getFile.articleNumber === 1
    );
  });
  const StartedWithAmbo = Data.filter(function(getFile) {
    return (
      getFile.sectionNumber === 1 &&
      getFile.ChapterNumber === 2 &&
      getFile.articleNumber === 1
    );
  });
  const aboutTheBook = Data.filter(function(getFile) {
    return getFile.fileName === 'aboutThisBook';
  });

  const AdviceForYourStay = Data.filter(function(getFile) {
    return (
      getFile.sectionNumber === 1 &&
      getFile.ChapterNumber === 4 &&
      getFile.articleNumber === 1
    );
  });
  const AdviceForYourStayThingsToBring = Data.filter(function(getFile) {
    return (
      getFile.sectionNumber === 1 &&
      getFile.ChapterNumber === 4 &&
      getFile.articleNumber === 2
    );
  });
  const AdviceForYourStayManagingPeople = Data.filter(function(getFile) {
    return (
      getFile.sectionNumber === 1 &&
      getFile.ChapterNumber === 4 &&
      getFile.articleNumber === 3
    );
  });
  const AdviceForYourStayLeavingHospital = Data.filter(function(getFile) {
    return (
      getFile.sectionNumber === 1 &&
      getFile.ChapterNumber === 4 &&
      getFile.articleNumber === 4
    );
  });

  const section2Divider = Data.filter(function(getFile) {
    return (
      getFile.sectionNumber === 2 &&
      getFile.ChapterNumber === 1 &&
      getFile.articleNumber === 1
    );
  });
  const yourDetails = Data.filter(function(getFile) {
    return (
      getFile.fileName === 'yourInformation' && getFile.articleNumber === 1
    );
  });
  const yourDetailsP2 = Data.filter(function(getFile) {
    return (
      getFile.fileName === 'yourInformation' && getFile.articleNumber === 2
    );
  });
  const timeline = Data.filter(function(getFile) {
    return getFile.fileName === 'timeline' && getFile.articleNumber === 1;
  });
  const timelineP2 = Data.filter(function(getFile) {
    return getFile.fileName === 'timeline' && getFile.articleNumber === 2;
  });

  const diaryIntro = Data.filter(function(getFile) {
    return getFile.fileName === 'diary' && getFile.articleNumber === 3;
  });
  const diary = Data.filter(function(getFile) {
    return getFile.fileName === 'diary' && getFile.articleNumber === 1;
  });
  const diaryP2 = Data.filter(function(getFile) {
    return getFile.fileName === 'diary' && getFile.articleNumber === 2;
  });
  const diagnosis = Data.filter(function(getFile) {
    return getFile.fileName === 'diagnosis' && getFile.articleNumber === 1;
  });
  const diagnosisP2 = Data.filter(function(getFile) {
    return getFile.fileName === 'diagnosis' && getFile.articleNumber === 2;
  });
  const drugs = Data.filter(function(getFile) {
    return getFile.fileName === 'drugs' && getFile.articleNumber === 1;
  });
  const drugsP2 = Data.filter(function(getFile) {
    return getFile.fileName === 'drugs' && getFile.articleNumber === 2;
  });

  // const yourDetailsNbr = 1;
  // const timelineNbr = 1;
  // const diaryNbr = 2;
  // const diagnosisNbr = 1;
  // const drugsNbr = 1;

  const yourDetailsNbr=3;
  const timelineNbr=3;
  const diaryNbr=30;
  const diagnosisNbr=3;
  const drugsNbr=3;

  return (
    <section
      id='Book Container'
      className={'container-flex-columm page-width-' + props.bookFormat}>
      {/* <Page bookFormat={props.bookFormat} data={stylesExamples} /> */}
      <PageNoPaddingImage bookFormat={props.bookFormat} data={frontCover} />

      {/* <DataSmy bookFormat={props.bookFormat} data={Data} /> */}
      <Page bookFormat={props.bookFormat} data={contents} />
      <Page bookFormat={props.bookFormat} data={divider1} />

      <Page bookFormat={props.bookFormat} data={StartedWithAmbo} />
      <PageBlock bookFormat={props.bookFormat} data={aboutTheBook} />
      <Page
        bookFormat={props.bookFormat}
        data={AdviceForYourStayThingsToBring}
      />
      <PageBlock
        bookFormat={props.bookFormat}
        data={AdviceForYourStayManagingPeople}
      />
      <PageBlock
        bookFormat={props.bookFormat}
        data={AdviceForYourStayLeavingHospital}
      />

<Page bookFormat={props.bookFormat} data={divider2} />
      <PageTableTwoColumn bookFormat={props.bookFormat} data={yourDetails} />
      <ComponentRepeater
        bookFormat={props.bookFormat}
        data={yourDetailsP2}
        repeats={yourDetailsNbr}
        childrenComponent={PageTableTwoColumn}
      />
      <PageTableTwoColumn bookFormat={props.bookFormat} data={timeline} />
      <ComponentRepeater
        bookFormat={props.bookFormat}
        data={timelineP2}
        repeats={timelineNbr}
        childrenComponent={PageTableTwoColumn}
      />
      <Page bookFormat={props.bookFormat} data={diagnosis} />
      <ComponentRepeater
        bookFormat={props.bookFormat}
        data={diagnosisP2}
        repeats={diagnosisNbr}
        childrenComponent={Page}
      />
      <PageTableTwoColumn bookFormat={props.bookFormat} data={drugs} />
      <ComponentRepeater
        bookFormat={props.bookFormat}
        data={drugsP2}
        repeats={drugsNbr}
        childrenComponent={PageTableTwoColumn}
      />
       <Page bookFormat={props.bookFormat} data={diaryIntro} />
      <ComponentRepeater
        bookFormat={props.bookFormat}
        repeats={diaryNbr}
        childrenComponent={TwoPageLayout}
        nextChildComponent={PageTableTwoColumn}
        data1={diary}
        data2={diaryP2}
      />
    </section>
  );
}
