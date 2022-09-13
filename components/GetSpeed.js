import React, { useEffect, useState } from "react";
import styles from "../styles/GetSpeed.module.css";

import { AiOutlineApi } from "react-icons/ai";
import { BsDownload, BsUpload } from "react-icons/bs";

import GetDownloadSpeed from "../hooks/getDownloadSpeed";

const GetSpeed = () => {
  return (
    <>
      <div className={styles.network_container}>
        <h1>Your Internet speed is:</h1>
        <div className={styles.box}>
          <div className={styles.card}>
            <article className={`${styles.card_content} ${styles.ping}`}>
              <AiOutlineApi className={styles.card_icons} />
              <h5>Ping</h5>
              <small>11 ms</small>
            </article>

            <article className={`${styles.card_content} ${styles.download}`}>
              <BsDownload className={styles.card_icons} />
              <h5>Download</h5>
              <small>{GetDownloadSpeed()} mbps</small>
            </article>

            <article className={`${styles.card_content} ${styles.upload}`}>
              <BsUpload className={styles.card_icons} />
              <h5>Upload</h5>
              <small>10 mbps</small>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetSpeed;
