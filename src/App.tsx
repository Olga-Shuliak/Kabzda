import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UnControledAccordion} from './components/UnControledAccordion/UnControledAccordion';
import {UncontrolledRating} from './components/Rating/UncontrolledRating';
import {ControlledSelect} from './components/Select/ControlledSelect';
import {GetValueOfUncontroledInputByButtonPress, UncontroledInput} from './components/Input/UnControledInput';
import {ControlledInput} from './components/Input/ControlledInput';
import {ControlledCheckbox} from './components/Checkbox/ControlledCheckbox';


type PageTitleProps = {
  title: string
}

function PageTitle(props: PageTitleProps) {
  console.log('PageTitle rendering')
  return (
      <h1>{props.title}</h1>
  );
}


function App() {

  return (
      <div className="App">
        <PageTitle title={'This is APP component'}/>
        <PageTitle title={'My friends'}/>
        Article 1
        <Rating value={0}/>
        <Accordion title={'Menu'} collapsed={false}/>
        <Accordion title={'Menu friends'} collapsed={false}/>
        Article 2
        <Rating value={0}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>
        Article 3
        <OnOff/>
        <OnOff/>
        Article 4
        <UnControledAccordion title={'New menu'}/>
        Article 5
        <UncontrolledRating />
        Article 6
        <UncontroledInput/>
        Ref
        <GetValueOfUncontroledInputByButtonPress/>
        ControlledInput
        <ControlledInput/>
        ControlledCheckbox
        <ControlledCheckbox/>
        ControlledSelect
        <ControlledSelect/>
      </div>
  );
}


export default App;
