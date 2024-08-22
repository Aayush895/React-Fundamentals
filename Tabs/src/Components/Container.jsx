import { useDatafetcher } from '../utils'
import JobContainer from './JobContainer'
import Tabs from './Tabs'
import styles from '../CSS/Container.module.css'

function Container() {
  const data = useDatafetcher('https://www.course-api.com/react-tabs-project')

  console.log(data);
  return (
    <div id={styles.outerContainer}>
      <div id={styles.innerContainer}>
        <Tabs />
        <JobContainer />
      </div>
    </div>
  )
}
export default Container