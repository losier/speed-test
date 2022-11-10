import NetworkSpeedCheck from "network-speed";
const testNetworkSpeed = new NetworkSpeedCheck();

async function getDownloads() {
  const baseUrl =
    "https://raw.githubusercontent.com/losier/speed-test/master/assets/image.jpg";
  const fileSizeInBytes = 61936;
  const speed = await testNetworkSpeed.checkDownloadSpeed(
    baseUrl,
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

export default getDownloads;
