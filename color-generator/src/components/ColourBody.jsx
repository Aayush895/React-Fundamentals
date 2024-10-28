/* eslint-disable react/prop-types */
import { nanoid } from 'nanoid'
import style from './ColourBody.module.css'

const ColourBody = ({ colorTints }) => {
  return (
    <div id={style.bodyContainer}>
      {colorTints.length != 0 &&
        colorTints.map((tint) => (
          <div
            id={style.colorDiv}
            key={nanoid()}
            style={{ backgroundColor: `#${tint.hex}` }}
          >
            {`#${tint.hex}`}
          </div>
        ))}
    </div>
  )
}
export default ColourBody
