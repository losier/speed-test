import React, { useEffect, useState } from "react";
import styles from "../styles/GetSpeed.module.css";

import { AiOutlineApi } from "react-icons/ai";
import { BsDownload, BsUpload } from "react-icons/bs";

import NetworkSpeed from "network-speed";
const testNetworkSpeed = new NetworkSpeed();

const GetSpeed = () => {
  const [ping, setPing] = useState(0);
  const [downloadSpeed, setDownloadSpeed] = useState(0);
  const [uploadSpeed, setUploadSpeed] = useState(0);

  useEffect(() => {
    async function getNetworkDownloadSpeed() {
      const baseUrl = "https://eu.httpbin.org/stream-bytes/500000";
      const fileSizeInBytes = 500000;
      const speed = await testNetworkSpeed.checkDownloadSpeed(
        baseUrl,
        fileSizeInBytes
      );
      // console.log(speed);
      setDownloadSpeed(speed.mbps);
    }

    const interval = setInterval(() => {
      getNetworkDownloadSpeed();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles.network_container}>
        <h1>Your Internet speed is:</h1>
        <div className={styles.box}>
          <div className={styles.card}>
            <article className={`${styles.card_content} ${styles.ping}`}>
              <AiOutlineApi className={styles.card_icons} />
              <h5>Ping</h5>
              <small>
                <span className={styles.value}>{downloadSpeed}</span>
                mbps
              </small>
            </article>

            <article className={`${styles.card_content} ${styles.download}`}>
              <BsDownload className={styles.card_icons} />
              <h5>Download</h5>
              <small>
                <span className={styles.value}>{downloadSpeed}</span>
                mbps
              </small>
            </article>

            <article className={`${styles.card_content} ${styles.upload}`}>
              <BsUpload className={styles.card_icons} />
              <h5>Upload</h5>
              <small>
                <span className={styles.value}>{downloadSpeed}</span>
                mbps
              </small>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetSpeed;
