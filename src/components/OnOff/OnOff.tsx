import classes from './OnOff.module.css'

type OnOffType = {
  on: boolean
}

export const OnOff = (props: OnOffType) => {

  const onStyle = {
    width: '30px',
    height: '20px',
    borderRadius: '1px',
    border: '1px solid black',
    display: 'inline-block',
    padding: '2px',
    backgroundColor: props.on ? 'green' : 'white'

  }
  const offStyle = {
    width: '30px',
    height: '20px',
    borderRadius: '1px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '2px',
    padding: '2px',
    backgroundColor: props.on ? 'white' : 'red'
  }
  const indicatorStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '15px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '7px',
    backgroundColor: props.on ? 'green' : 'red'
  }

  return (
      <div className={classes.onOffBlock}>

        <div style={onStyle}>On</div>
        <div style={offStyle}>Off</div>
        <span style={indicatorStyle}></span>

      </div>
  )
}
