/*eslint no-console: 0*/
const log = require('./logger.js').getConsole();

function end() {
  log.info("Exiting...");
  log.info(String.fromCharCode(9829));
  process.exit(0);
}

process.on('SIGINT', end);
