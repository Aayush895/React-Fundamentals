import Navbar from './Navbar'
import Hero from './Hero'
import style from './Container.module.css'

function Container() {
  return (
    <div id={style.outerContainer}>
      <Navbar />
      <Hero />
    </div>
  )
}
export default Container
