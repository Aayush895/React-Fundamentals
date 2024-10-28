import ColourInput from './ColourInput'
import Header from './Header'
import style from './Container.module.css'

const Container = () => {
  return (
    <div id={style.outerContainer}>
      <Header />
      <ColourInput />
    </div>
  )
}
export default Container
