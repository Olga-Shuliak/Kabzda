import {useRef, useState} from 'react';


export const UncontroledInput = ()=> {

  const [value, setValue] = useState('')

  return (
      <div>
        <input onChange={(event)=> {
        const actualValue = event.currentTarget.value;
          setValue(actualValue);
        }}/> - {value}
      </div>

  )
}
export const GetValueOfUncontroledInputByButtonPress = () => {

  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  return (
      <div>
        <input ref={inputRef}
            id={'inputId'}/>
        <button onClick={(e)=> {
          const el = inputRef.current as HTMLInputElement;
          setValue(el.value)}}>
          save
        </button> - actual value: {value}
      </div>
  )
}
