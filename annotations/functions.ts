const add = (a: number, b: number): number => {
  return a + b;
};

// function minus(a: number, b: number): number {
//   return a - b
// }

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (msg: string): never => {
  throw new Error(msg);
};

const wea = {
  date: new Date(),
  weather: "sunny",
};

const loggerW = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather);
};

loggerW(wea);
