const cron = require("node-cron");
const { logInfo, logError } = require("../utils/logger");
const { emitNumberCreated } = require("../config/socket");

// Constants
const CHECK_TIME = { hours: 13, minutes: 49 };
const ADD_NUMBER_INTERVAL = 1000; // 1 second
const MAX_COUNT = 27;

function startSendNumberResultToClient(resultId, numbers) {
    logInfo("Gửi socket về client");
    const rotatedNumbers = [...numbers.slice(1), numbers[0]];
    let count = 0;
    const interval = setInterval(async () => {
        if (count < MAX_COUNT) {
            emitNumberCreated({
                value: Number(rotatedNumbers[count].value),
                provinceId: 12,
                resultId: resultId,
                createdAt: new Date(),
            });
            count++;
        } else {
            clearInterval(interval);
            logInfo("Kết thúc việc startSendNumberResultToClient");
        }
    }, ADD_NUMBER_INTERVAL);
}

// Cron Job Setup
function start(resultId, numbers) {
    logInfo("Cron job đã được lên lịch");
    // cron.schedule(`${CHECK_TIME.minutes} ${CHECK_TIME.hours} * * *`, () => {
    //     startSendNumberResultToClient(resultId,numbers);
    // });
    startSendNumberResultToClient(resultId,numbers);
}

module.exports = { start };
