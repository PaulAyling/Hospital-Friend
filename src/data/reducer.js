import React, { Fragment } from 'react';
import Furniture from './furniture/furniture';
import Contents from './furniture/contents';

import HowItStarted from './sectionOne/howItStarted';

import AboutBook from './sectionOne/aboutBook/aboutThisBook';
import HospitalRelease from './sectionOne/Advice/hospitalRelease';
import ItemChecklist from './sectionOne/Advice/itemChecklist';
import ManagingPeople from './sectionOne/Advice/managingPeople';

import Diagnosis from './sectionTwo/diagnosis';
import Dairy from './sectionTwo/diary';
import Drugs from './sectionTwo/drugs';
import Events from './sectionTwo/events';
import Timeline from './sectionTwo/timeline';
import YourInformation from './sectionTwo/yourInformation';
import Diary from './sectionTwo/diary';

// Furniture
const furniture = Furniture;
const contents = Contents;

const sectionFurniture = furniture.concat(contents);
// Section 1
const howItStarted = HowItStarted;

const aboutBook = AboutBook;

const hospitalRelease = HospitalRelease;
const itemChecklist = ItemChecklist;
const managingPeople = ManagingPeople;
const Advice = managingPeople.concat(itemChecklist.concat(hospitalRelease));

const sectionOne = howItStarted.concat(howItStarted.concat(Advice.concat(aboutBook)));
// Section 2
//  const diagnosis = Diagnosis;
const diagnosis = Diagnosis;
const dairy = Diary;
const drugs = Drugs;
const events = Events;
const timeline = Timeline;
const yourInformation = YourInformation;
const sectionTwo = diagnosis.concat(
  dairy.concat(drugs.concat(events.concat(timeline.concat(yourInformation))))
);

// OUTPUT
const Reducer = sectionFurniture.concat(sectionOne.concat(sectionTwo));
export default Reducer;
