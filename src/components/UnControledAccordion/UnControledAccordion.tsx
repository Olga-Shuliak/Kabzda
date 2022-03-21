import classes from '../Accordion/Accordion.module.css';
import React, {useState} from 'react';


type UnControledAccordionPropsType = {
  title: string
  //collapsed: boolean
}



export const UnControledAccordion = (props: UnControledAccordionPropsType) => {

  let [collapsed, setCollapsed] = useState(false)

  return (
      <div className={classes.menuBox}>
        <UnControledAccordionTitle titleValue={props.title}/>
        <button onClick={()=> {setCollapsed(!collapsed)}}>Click here</button>
        { collapsed && <UnControledAccordionBody/>}
      </div>
  )
}

function UnControledAccordionTitle(props: { titleValue: string }) {
  return <h3>{props.titleValue}</h3>;
}

function UnControledAccordionBody() {
  return (
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
  );
}
