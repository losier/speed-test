import React, { useEffect, useState } from "react";
import styles from "../styles/TestMeter.module.css";

//icons
import { BsSpeedometer2, BsUpload, BsDownload } from "react-icons/bs";

// importing hooks function
import latency from "../hooks/getLatency";
import getDownload from "../hooks/getDownload";
import getUpload from "../hooks/getUpload";

const TestMeter = () => {
  const [ping, setPing] = useState(0);
  const [download, setDownload] = useState(0);
  const [upload, setUpload] = useState(0);

  const testFnc = async () => {
    setPing(await latency());
    setDownload(getDownload());
    setUpload(await getUpload());
  };

  return (
    <div className={styles.container}>
      <div className={styles.meter_card}>
        <article className={styles.meter}>
          <BsSpeedometer2 className={styles.card_icons} />
          <h2>{ping} ms</h2>
          <small>Ping</small>
        </article>

        <article className={styles.meter}>
          <BsDownload className={styles.card_icons} />
          <h2>{download}</h2>
          <small>Download</small>
        </article>

        <article className={styles.meter}>
          <BsUpload className={styles.card_icons} />
          <h2>{upload}</h2>
          <small>Upload</small>
        </article>
        <button onClick={testFnc}>Get Ping</button>
      </div>
    </div>
  );
};

export default TestMeter;
