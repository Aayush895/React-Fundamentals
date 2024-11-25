import ColourInput from './ColourInput'
import Header from './Header'
import style from './Container.module.css'

const Container = () => {
  return (
    <div id={style.outerContainer} data-testid = "container">
      <Header />
      <ColourInput />
    </div>
  )
}
export default Container
