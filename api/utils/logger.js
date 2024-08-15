const logInfo = (message, ...additionalData) => {
    console.log(`[INFO] [${new Date().toISOString()}] ${message}`, ...additionalData);
};

const logError = (message, ...additionalData) => {
    console.error(`[ERROR] [${new Date().toISOString()}] ${message}`, ...additionalData);
};

module.exports = {
    logInfo,
    logError
};
