import style from './Header.module.css'

function Header() {
  return (
    <div id={style.headerContainer} data-testid="header-component-div">
      <h1>Grocery Bud</h1>
    </div>
  )
}
export default Header
