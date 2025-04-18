import Button from "../button/Button";
import styles from "./Header.module.css";
import { useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";
import arrowBack from "../../../assets/eva_arrow-ios-back-fill.png";

type Props = {
  h1: string | undefined;
  isUserPage?: boolean;
};
const Header = ({ h1, isUserPage }: Props) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: "(max-width: 630px)" });

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.headerHome} ${isUserPage ? styles.user_page : ""}`}
      >
        {isUserPage && (
          <Button className={styles.button_goBack} onClick={handleGoBack}>
            {isMobile ? <img src={arrowBack} alt="arrowBack" /> : "Назад"}
          </Button>
        )}
        <div className={isUserPage ? styles.text_container : ""}>
          <h1 className={styles.h1}>{h1}</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
