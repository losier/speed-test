const imageURL =
  "https://raw.githubusercontent.com/losier/speed-test/master/assets/image.jpg";
const size = 61936;

const getDownload = () => {
  var image = new Image();
  image.src = imageURL;
  var startTime = Date.now();
  console.log("started", startTime);
  const loadImage = () => {
    let kbps_speed;
    image.onload = () => {
      let endTime = Date.now();
      let responseTime = endTime - startTime;

      const bitsLoaded = size * 8;
      const speedBps = bitsLoaded / responseTime;
      const speedKbps = (speedBps / 1024).toFixed(2);

      kbps_speed = speedKbps;
    };
    let speed;
    if (kbps_speed > 1000) {
      speed = kbps_speed;
    } else {
      speed = 0;
    }
  };
  console.log("ended", Date.now());
};

export default getDownload;
