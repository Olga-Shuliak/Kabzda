import classes from './OnOff.module.css'
import {useState} from 'react';

type OnOffType = {
 // on: boolean
}

export const OnOff = (props: OnOffType) => {

  let [on, setOn]  = useState(false)

  const onStyle = {
    width: '30px',
    height: '20px',
    borderRadius: '1px',
    border: '1px solid black',
    display: 'inline-block',
    padding: '2px',
    backgroundColor: on ? 'green' : 'white'

  }
  const offStyle = {
    width: '30px',
    height: '20px',
    borderRadius: '1px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '2px',
    padding: '2px',
    backgroundColor: on ? 'white' : 'red'
  }
  const indicatorStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '15px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '7px',
    backgroundColor: on ? 'green' : 'red'
  }

  return (
      <div className={classes.onOffBlock}>

        <div style={onStyle} onClick={()=>{setOn(true)}}>On</div>
        <div style={offStyle} onClick={()=>{setOn(false)}}>Off</div>
        <span style={indicatorStyle}></span>

      </div>
  )
}
