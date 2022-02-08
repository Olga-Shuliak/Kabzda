import React from 'react';

type AccordionPropsType = {
  title: string
  collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
  console.log('Accordion rendering')
  if (props.collapsed) {
    return (
        <div>
          <AccordionTitle titleValue={props.title}/>
          <AccordionBody/>
        </div>
    );
  } else {
    return (
        <div>
          <AccordionTitle titleValue={props.title}/>
        </div>
    );
  }

}

function AccordionTitle(props: { titleValue: string }) {
  console.log('AccordionTitle rendering')
  return <h3>{props.titleValue}</h3>;
}

function AccordionBody() {
  console.log('AccordionBody rendering')
  return (
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
  );
}

export default Accordion;
