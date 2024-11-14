import React from "react";
import styles from "./Error.module.css";

const Error = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Error</h1>
      </div>
      <div className={styles.message}>
        "Something went wrong. Please try again later."
      </div>
    </div>
  );
};

export default Error;
