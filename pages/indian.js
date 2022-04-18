import { Toolbar } from "../components/toolbar";
import styles from "../styles/EOM.module.css";
import BikeCard from "../components/indianBikes";
const Indian = ({ bikes }) => {
  return (
    <div className='page-container'>
      <Toolbar />
      <div className={styles.main}>
        <h1> Indian Bikes</h1>
        <BikeCard />
      </div>
    </div>
  );
};

export default Indian;
