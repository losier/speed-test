const ping_results: any = [];

const getResponse = async () => {
  const startTime = Date.now();
  const response = await fetch("/api/ping");
  const data = response.json();
  const endTime = Date.now();
  let responseTime = endTime - startTime;

  return responseTime;
};

const latency = async () => {
  for (let i = 0; i < 10; i++) {
    let speed = await getResponse();
    ping_results.push(speed);
  }
  const sum = ping_results.reduce((a: any, b: any) => a + b, 0);
  const avg = Math.floor(sum / ping_results.length || 0);
  return avg;
};

export default latency;
