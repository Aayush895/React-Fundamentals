import ReactLoading from 'react-loading'
import styles from './Loading.module.css'
const Loading = () => {
  return (
    <div id={styles.container}>
      <ReactLoading
        type={'spinningBubbles'}
        color={'#03fc4e'}
        height={200}
        width={200}
      />
    </div>
  )
}
export default Loading
