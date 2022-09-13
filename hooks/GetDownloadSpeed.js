import { useState } from "react";

import NetworkSpeed from "network-speed";
const testNetworkSpeed = new NetworkSpeed();

const GetDownloadSpeed = async () => {
  const baseUrl = "https://eu.httpbin.org/stream-bytes/500000";
  const fileSizeInBytes = 500000;
  const speed = await testNetworkSpeed.checkDownloadSpeed(
    baseUrl,
    fileSizeInBytes
  );
  return speed.kbps;
};

export default GetDownloadSpeed;
