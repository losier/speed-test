const imageURL =
  "https://images.unsplash.com/photo-1556800695-a5b593d1586b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
const size = 61936;

const getDownload = () => {
  var image = new Image();
  image.src = imageURL;

  var randomNum = Math.floor(Math.random() * size);
  let endTime: number;
  let startTime = Date.now();
  console.log("startTime", startTime);

  image.onload = function () {
    console.log("Image loaded");
    endTime = Date.now();
    console.log("endtime", endTime);
  };

  image.src = imageURL;
  const showResults = () => {
    const duration = (endTime - startTime) / 1000;
    console.log("duration", duration);
    const bitsLoaded = size * 8;
    console.log("bitsLoaded", bitsLoaded);
    const speedBps: number = bitsLoaded / duration;
    console.log("speedBps", speedBps);
    const speedKbps: any = speedBps / 1024;
    console.log("speedKbps", speedKbps);
    const speedMbps = speedKbps / 1024;
    console.log("speedMbps", speedMbps);

    return speedMbps;
  };
  const downloadSpeed = showResults();

  return downloadSpeed;
};

export default getDownload;
