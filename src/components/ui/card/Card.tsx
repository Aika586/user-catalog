import styles from "./Card.module.css";
import { Link } from "react-router";
type Props = {
  email: string;
  name: string;
  city: string;
  id: number;
};

const Card = ({ email, city, name, id }: Props) => {
  return (
    <Link to={`/users/${id}`}>
      <div className={styles.wrapper}>
        <div className={styles.card_container}>
          <p className={styles.name}>{name}</p>
          <p className={styles.text}>
            <b>City:</b>
            {city}
          </p>
          <p className={styles.text}>
            <b>Email:</b>
            {email}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
