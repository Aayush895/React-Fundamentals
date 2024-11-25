import style from './Header.module.css'

const Header = () => {
  return (
    <div id={style.headerContainer} data-testid="header-component">
      <h1>Colour Generator</h1>
    </div>
  )
}
export default Header
