import Header from './Header'
import style from './Container.module.css'
import ItemInput from './ItemInput'

function Container() {
  return (
    <div id={style.outerContainer}>
      <Header />
      <ItemInput />
    </div>
  )
}
export default Container
