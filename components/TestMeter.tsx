import React, { useEffect, useState } from "react";
import styles from "../styles/TestMeter.module.css";

//icons
import { BsSpeedometer2, BsUpload, BsDownload } from "react-icons/bs";

const TestMeter = () => {
  const [ping, setPing] = useState(0);
  const [download, setDownload] = useState(0);
  const [upload, setUpload] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.meter_card}>
        <article className={styles.meter}>
          <BsSpeedometer2 className={styles.card_icons} />
          <h2>test</h2>
          <small>Ping</small>
        </article>

        <article className={styles.meter}>
          <BsDownload className={styles.card_icons} />
          <h2>test</h2>
          <small>Download</small>
        </article>

        <article className={styles.meter}>
          <BsUpload className={styles.card_icons} />
          <h2>test</h2>
          <small>Upload</small>
        </article>
      </div>
    </div>
  );
};

export default TestMeter;
