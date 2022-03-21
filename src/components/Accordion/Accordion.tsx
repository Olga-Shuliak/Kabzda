import React from 'react';
import classes from './Accordion.module.css';


type AccordionPropsType = {
  title: string
  collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
  console.log('Accordion rendering')

    return (
        <div className={classes.menuBox}>
          <AccordionTitle titleValue={props.title}/>
          { !props.collapsed && <AccordionBody/>}
        </div>
    );

}

function AccordionTitle(props: { titleValue: string }) {
  console.log('AccordionTitle rendering')
  return <h3>{props.titleValue}</h3>;
}

function AccordionBody() {
  console.log('AccordionBody rendering')
  return (
      <ul>
        <li>Messages</li>
        <li>Photo</li>
        <li>Video</li>
      </ul>
  );
}

export default Accordion;
