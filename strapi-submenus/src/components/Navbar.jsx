import { useState } from 'react'
import sublinks from '../data'
import style from './Navbar.module.css'
import Submenu from './Submenu'

function Navbar() {
  const [isHidden, setisHidden] = useState(true)
  const [currPageId, setcurrPageId] = useState(null)

  function showsubMenu(pageId) {
    setisHidden(false)
    setcurrPageId(pageId)
  }

  function hidesubMenu() {
    setisHidden(true)
  }

  console.log(currPageId)
  console.log(isHidden)
  return (
    <div id={style.navContainer}>
      <div id={style.logo}>
        <h1>strapi</h1>
      </div>
      <div id={style.navItems}>
        <ul>
          {sublinks.map((sublink) => (
            <li
              key={sublink.pageId}
              onMouseEnter={() => showsubMenu(sublink.pageId)}
              onMouseLeave={hidesubMenu}
            >
              {!isHidden && sublink.pageId == currPageId ? (
                <Submenu header={sublink.page} links={sublink.links} />
              ) : null}
              {sublink.page}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Navbar
