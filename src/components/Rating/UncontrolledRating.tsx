import React, {useState} from 'react';

type StarPropsType = {
  id: number
  value: number
  setValue: (id:number)=>void
}

export function UncontrolledRating() {

  let [value, setValue] = useState(0)

  return (
      <div>
        <Star id={1} value={value} setValue={setValue}/>
        <Star id={2} value={value} setValue={setValue}/>
        <Star id={3} value={value} setValue={setValue}/>
        <Star id={4} value={value} setValue={setValue}/>
        <Star id={5} value={value} setValue={setValue}/>
      </div>
  )
}

function Star(props: StarPropsType) {

  const starStyle = {
    display: 'inline-block',
    width: '50px',
    height: '50px',
    border: '1px solid black',
    marginRight: '2px',
    backgroundColor: props.id <= props.value ? 'gold' : 'white'
  }

  const changeColor = () => {
    props.setValue(props.id)
  }

  return <div onClick={changeColor} style={starStyle}>STAR</div>
}

