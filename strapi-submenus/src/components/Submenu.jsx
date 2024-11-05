/* eslint-disable react/prop-types */
import style from './Submenu.module.css'

function Submenu({ header, links }) {
  return (
    <div id={style.submenuContainer}>
      <h1>{header}</h1>
      <div id={style.submenuItems}>
        {links.map((link) => (
          <div key={link.id} id={style.itemList}>
            <p>{link.icon}</p>
            <p>{link.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Submenu
