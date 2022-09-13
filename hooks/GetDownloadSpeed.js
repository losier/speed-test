import { useEffect, useState } from "react";

import NetworkSpeed from "network-speed";
const testNetworkSpeed = new NetworkSpeed();

const GetDownloadSpeed = () => {
  const [downloadSpeed, setDownloadSpeed] = useState(0);
  useEffect(() => {
    async () => {
      async function getNetworkDownloadSpeed() {
        const baseUrl = "https://eu.httpbin.org/stream-bytes/500000";
        const fileSizeInBytes = 500000;
        const speed = await testNetworkSpeed.checkDownloadSpeed(
          baseUrl,
          fileSizeInBytes
        );
        console.log(speed);
        
        setInterval(() => {
            setDownloadSpeed(speed);
        }, 5000)
      }
    };
  });
  return (
    <>
      <span>{downloadSpeed}</span>
    </>
  );
};

export default GetDownloadSpeed;
