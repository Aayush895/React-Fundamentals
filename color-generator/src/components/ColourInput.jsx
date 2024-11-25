import { useState } from 'react'
import Values from 'values.js'
import style from './ColourInput.module.css'
import ColourBody from './ColourBody'

const ColourInput = () => {
  const [color, setColor] = useState('black')
  const [colorTints, setcolorTints] = useState('')

  function handlecolorInput(e) {
    setColor(e.target.value)
  }

  function handlecolorGeneration() {
    const generatedColor = new Values(color)
    setcolorTints(generatedColor.tints(10))
  }
  
  return (
    <>
      <div id={style.inputContainer} data-testid="color-input">
        <input
          type="color"
          name="clrInput"
          id="clrInput"
          value={color}
          onChange={handlecolorInput}
          data-testid="color-picker"
        />
        <input
          type="text"
          name="textInput"
          id="textInput"
          value={color}
          onChange={handlecolorInput}
        />
        <button onClick={handlecolorGeneration}>Submit</button>
      </div>
      <ColourBody colorTints={colorTints} />
    </>
  )
}

export default ColourInput
