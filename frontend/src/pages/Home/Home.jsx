import React from "react";
import styles from "./Home.module.css";
import {Link} from "react-router-dom"
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";

const Home = () => {
  const signInLinkStyle = {
    color: '#0077ff',
    fontWeight: 'bold',
    textDecoration: 'none',
    marginLeft: '10px',
};
  return (
   <div className={styles.cardWrapper}>
    <Card title={"Welcome to Codershouse !!!"} icon={"logo"}>
    <p className={styles.text}>
        We're working hard to get Codershouse. Ready for everyone! While we wrap
        up the finishing youches, we're adding people gradually to make sure
        nothing breaks.
      </p>
      <div>
        <Button text={"Get your Username"}></Button>
      </div>
      <div className={styles.signinWrapper}>
        <span className={styles.hasInvite}>
          Have a invite text
          <Link style={signInLinkStyle} to="/login">Sign in</Link>
        </span>
      </div>
    </Card>
   </div>
  );
};

export default Home;
