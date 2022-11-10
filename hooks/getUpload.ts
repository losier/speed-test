import NetworkSpeedCheck from "network-speed";
const testNetworkSpeed = new NetworkSpeedCheck();

async function getUpload() {
  const options = {
    hostname: "www.google.com",
    port: 80,
    path: "/catchers/544b09b4599c1d0200000289",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const fileSizeInBytes = 2000000;
  const speed = await testNetworkSpeed.checkUploadSpeed(
    options,
    fileSizeInBytes
  );

  var returnValue = "";
  var speedInmbps = parseFloat(speed.kbps);
  if (speedInmbps != NaN) returnValue = "❌";

  if (speedInmbps < 1000) {
    returnValue = speedInmbps + " kbps";
  } else {
    returnValue = (speedInmbps / 1000).toFixed(2) + " mbps";
  }
  return returnValue;
}

export default getUpload;
