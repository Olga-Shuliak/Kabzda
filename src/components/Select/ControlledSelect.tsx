import React, {ChangeEvent, useState} from 'react';


export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState< string | undefined >(undefined);

  const ChangeValue = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value);
  }
  return (
      <div>
        <select value={parentValue}
        onChange={ChangeValue}>
          <option>none</option>
          <option value="1">Leonid</option>
          <option value="2">Olga</option>
          <option value="3">Svetlana</option>
          <option value="4">Zakhar</option>
        </select>
      </div>
  )
}
