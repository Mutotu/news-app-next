import styles from "../styles/EOM.module.css";

const EomCard = (props) => {
  return (
    <div className={styles.employeeOfTheMonth}>
      <h3>{props.name}</h3>
      <h6>{props.position}</h6>
      <img src={props.image} />
      <p>{props.description}</p>
    </div>
  );
};

export default EomCard;
