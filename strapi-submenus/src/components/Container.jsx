import Navbar from './Navbar'
import Hero from './Hero'
import style from './Container.module.css'
// import Submenu from './Submenu'

function Container() {
  return (
    <div id={style.outerContainer}>
      <Navbar />
      {/* <Submenu /> */}
      <Hero />
    </div>
  )
}
export default Container
