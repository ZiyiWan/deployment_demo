import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import PatientList from './patientList'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <PatientList/>
    </div>
  )
}

export default Home
