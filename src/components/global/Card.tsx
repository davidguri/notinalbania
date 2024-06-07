// import React from 'react';
import styles from "./styles/Card.module.scss";
import { Link } from "react-router-dom";

export default function Card(props: any) {
  return (
    <>
      <Link to={`/${props.url}`}>
        <main className={styles.main}>

        </main>
      </Link>
    </>
  );
}