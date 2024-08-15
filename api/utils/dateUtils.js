/**
 * Hàm để lấy ngày hiện tại theo định dạng YYYY-MM-DD
 * @returns {string} Ngày hiện tại
 */
function getTodayDate() {
    return new Date().toISOString().split('T')[0];
}

module.exports = {
    getTodayDate,
};
