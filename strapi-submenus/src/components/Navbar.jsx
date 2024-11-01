import style from './Navbar.module.css'

function Navbar() {
  return (
    <div id={style.navContainer}>
      <div id={style.logo}>
        <h1>strapi</h1>
      </div>
      <div id={style.navItems}>
        <ul>
          <li>Product</li>
          <li>Solutions</li>
          <li>Resources</li>
        </ul>
      </div>
    </div>
  )
}
export default Navbar