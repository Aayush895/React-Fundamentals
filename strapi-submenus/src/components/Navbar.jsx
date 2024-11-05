import { useState } from 'react'
import sublinks from '../data'
import style from './Navbar.module.css'
import Submenu from './Submenu'

function Navbar() {
  const [isHidden, setisHidden] = useState(true)

  function showsubMenu() {
    setisHidden(false)
  }

  function hidesubMenu() {
    setisHidden(true)
  }

  return (
    <div id={style.navContainer}>
      <div id={style.logo}>
        <h1>strapi</h1>
      </div>
      <div id={style.navItems}>
        <ul>
          <li onMouseEnter={showsubMenu} onMouseLeave={hidesubMenu}>
            {!isHidden ? (
              <Submenu header={sublinks[0].page} links={sublinks[0].links} />
            ) : null}
            Product
          </li>
          <li>Solutions</li>
          <li>Resources</li>
        </ul>
      </div>
    </div>
  )
}
export default Navbar
