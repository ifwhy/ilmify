import winston from "winston";

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "white",
};

winston.addColors(colors);

const format = winston.format.combine(
  winston.format.timestamp({
    format: "YYYY-MM-DDTHH:mm:ss",
  }),

  winston.format.json(),

  winston.format.colorize({ all: true })
);

const level = () => {
  const isDevelopment = process.env.NODE_ENV || "development";
  return isDevelopment ? "debug" : "warn";
};

const transports = [
  // Allow the user to console/print the message
  new winston.transports.Console(),
  // Allow to print all error level messages inside the all.log file
  new winston.transports.File({
    filename: "src/log/error.log",
    level: "error",
  }),

  // Allow to print all messages inside the all.log file
  new winston.transports.File({
    filename: "src/log/all.log",
  }),
];

const log = winston.createLogger({
  level: level(),
  levels: levels,
  format: format,
  transports: transports,
  exitOnError: false,
});

export default log;
