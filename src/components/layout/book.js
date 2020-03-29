import React, { Fragment } from 'react';
import PageBlock from './page-block';
import Page from './page';
import PageNoPaddingImage from './page-nopadding-image';
import DataSmy from '../layout/dataSmy';
import PageTableTwoColumn from './page-table-two-column';
import TwoPageLayout from './two-page-layout';


export default function(props) {
  const Data = props.data;
  console.log(Data)


  const stylesExamples = Data.filter(function(getFile) {
    return getFile.sectionNumber === 0 && getFile.ChapterNumber === 1;
  });
  const frontCover = Data.filter(function(getFile) {
    return getFile.sectionNumber === 0 && getFile.ChapterNumber === 5;
  });
  const contents = Data.filter(function(getFile) {
    return getFile.sectionNumber === 0 && getFile.ChapterNumber === 6;
  });
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
    return (
      getFile.sectionNumber === 1 &&
      getFile.ChapterNumber === 3 &&
      getFile.articleNumber === 1
    );
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
      getFile.sectionNumber === 2 &&
      getFile.ChapterNumber === 1 &&
      getFile.articleNumber === 2
    );
  });
  const timeline = Data.filter(function(getFile) {
    return (
      getFile.sectionNumber === 2 &&
      getFile.ChapterNumber === 2 &&
      getFile.articleNumber === 1
    );
  });
  const diary = Data.filter(function(getFile) {
    return (
      getFile.sectionNumber === 2 &&
      getFile.ChapterNumber === 2 &&
      getFile.articleNumber === 2
    );
  });
  const diaryPageTwo = Data.filter(function(getFile) {
    return (
      getFile.sectionNumber === 2 &&
      getFile.ChapterNumber === 2 &&
      getFile.articleNumber === 3
    );
  });
  const diagnosisOne = Data.filter(function(getFile) {
    return (
      getFile.sectionNumber === 2 &&
      getFile.ChapterNumber === 4 &&
      getFile.articleNumber === 1
    );
  });

  console.log(diagnosisOne)

  return (
    <section
      id='Book Container'
      className={'container-flex-columm page-width-' + props.bookFormat}>
      {/* <Page bookFormat={props.bookFormat} data={stylesExamples} />
      <PageNoPaddingImage bookFormat={props.bookFormat} data={frontCover} />
      <Page bookFormat={props.bookFormat} data={contents} /> */}
      {/* <PageBlock bookFormat={props.bookFormat} data={StartedWithAmbo} />
      <PageBlock bookFormat={props.bookFormat} data={aboutTheBook} />
      <PageBlock bookFormat={props.bookFormat} data={AdviceForYourStay} />
      <PageBlock bookFormat={props.bookFormat} data={AdviceForYourStayThingsToBring}/>
      <PageBlock bookFormat={props.bookFormat} data={AdviceForYourStayManagingPeople}/>
      <PageBlock bookFormat={props.bookFormat} data={AdviceForYourStayLeavingHospital}/> */}
      {/* SECTION 2 */}
      {/* <DataSmy bookFormat={props.bookFormat} data={Data} /> */}
      {/* <PageTableTwoColumn bookFormat={props.bookFormat} data={yourDetails} />
      <PageTableTwoColumn bookFormat={props.bookFormat} data={timeline} /> */}
      {/* <PageTableTwoColumn  bookFormat={props.bookFormat} data={diary} />
      <PageTableTwoColumn  bookFormat={props.bookFormat} data={diaryPageTwo} /> */}
      <Page bookFormat={props.bookFormat} data={diagnosisOne} />
    </section>
  );
}
