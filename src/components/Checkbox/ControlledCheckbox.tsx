import React, {ChangeEvent, useState} from 'react';


export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(true);

  const ChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked);
  }

  return <div><input type='checkbox'
                     checked={parentValue}
                     onChange={ChangeValue}/></div>

}
