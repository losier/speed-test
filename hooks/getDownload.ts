const imageURL =
  "https://raw.githubusercontent.com/losier/speed-test/master/assets/image.jpg";
const size = 61936;

const getDownload = () => {
  var image = new Image();
  image.src = imageURL;

  var startTime = Date.now();

  var onLoadFunction = () => {
    var endTime = Date.now();

    var duration = endTime - startTime;
    var bitsLoader = size * 8;
    var speedBps = bitsLoader / duration;
    var speed = speedBps / 1024;

    var speedValue;

    if (speed > 1000) {
      speedValue = (speed / 1024).toString().slice(0, 4) + " Mbps";
    } else {
      speedValue = speed.toString().slice(0, 4) + " Kbps";
    }

    return speedValue;
  };

  image.onload = onLoadFunction;
  image.onerror = () => {
    return "❌";
  };
  image.src = imageURL;

  let speed = onLoadFunction();

  return speed;
};

export default getDownload;
