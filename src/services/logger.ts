import pino from "pino";
import { isProduction } from "../utils/misc";
import { Logger } from "../interfaces/Logger";
export const logger: Logger = (() => {
  const configs = isProduction
    ? {}
    : {
        transport: {
          target: "pino-pretty",
          options: {
            colorize: true,
          },
        },
      };
  const pinoLogger: Logger = pino(configs);
  return pinoLogger;
})();
