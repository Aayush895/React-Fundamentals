import style from './Hero.module.css'

function Hero() {
  return (
    <div id={style.heroContainer}>
      <h1>Manage Any Content Anywhere</h1>
      <p>
        Strapi is the leading open-source headless CMS. It&apos;s 100%
        Javascript and fully customizable.
      </p>
    </div>
  )
}
export default Hero
