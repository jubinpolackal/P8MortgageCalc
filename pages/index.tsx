import type { NextPage } from 'next'
import classes from './Pages.module.css';
import Title from '../components/title/Title';
import Selection from '../components/selection/Selection';
import Result from '../components/result/Result';


const Home: NextPage = () => {
  return (
    <div className={classes['generic-container']}>
      <Title/>
      <div className={classes['grid-container']}>
        <div>
          <Selection/>
        </div>
        <div>
          <Result/>
        </div>
      </div>
    </div>
  )
}

export default Home
