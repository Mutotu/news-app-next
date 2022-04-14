import styles from "../styles/EOM.module.css";
import { Toolbar } from "../components/toolbar";
import EomCard from "../components/eomCard";

export const EOM = ({ employee }) => {
  console.log(employee);
  return (
    <div className='page-container'>
      <Toolbar />
      <div className={styles.main}>
        <h1>Employee of the month </h1>

        <EomCard
          name={employee.name}
          position={employee.position}
          image={employee.image}
          description={employee.description}
        />
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch(
    "https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth"
  );
  const employee = await apiResponse.json();
  return {
    props: {
      employee,
    },
  };
};

export default EOM;
