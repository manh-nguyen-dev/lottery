const REGIONS = require('./regions');

const PROVINCES = [
    { id: 7, name: 'An Giang', region_id: 3 },
    { id: 8, name: 'Bà Rịa-Vũng Tàu', region_id: 3 },
    { id: 15, name: 'Bình Dương', region_id: 3 },
    { id: 16, name: 'Bình Phước', region_id: 3 },
    { id: 17, name: 'Bình Thuận', region_id: 3 },
    { id: 14, name: 'Bình Định', region_id: 2 },
    { id: 13, name: 'Bến Tre', region_id: 3 },
    { id: 12, name: 'Bắc Ninh', region_id: 1 },
    { id: 11, name: 'Bắc Kạn', region_id: 1 },
    { id: 10, name: 'Bắc Giang', region_id: 1 },
    { id: 9, name: 'Bạc Liêu', region_id: 3 },
    { id: 1, name: 'Hà Nội', region_id: 1 },
    { id: 2, name: 'Hà Nam', region_id: 1 },
    { id: 3, name: 'Hồ Chí Minh', region_id: 3 },
    { id: 4, name: 'Đà Nẵng', region_id: 2 },
    { id: 5, name: 'Hải Phòng', region_id: 1 },
    { id: 6, name: 'Cần Thơ', region_id: 3 },
    { id: 18, name: 'Cà Mau', region_id: 3 },
    { id: 19, name: 'Cao Bằng', region_id: 1 },
    { id: 20, name: 'Đắk Lắk', region_id: 3 },
    { id: 21, name: 'Đắk Nông', region_id: 3 },
    { id: 22, name: 'Điện Biên', region_id: 1 },
    { id: 23, name: 'Đồng Nai', region_id: 3 },
    { id: 24, name: 'Đồng Tháp', region_id: 3 },
    { id: 25, name: 'Gia Lai', region_id: 3 },
    { id: 26, name: 'Hà Giang', region_id: 1 },
    { id: 27, name: 'Hà Tĩnh', region_id: 1 },
    { id: 28, name: 'Hải Dương', region_id: 1 },
    { id: 29, name: 'Hậu Giang', region_id: 3 },
    { id: 30, name: 'Hòa Bình', region_id: 1 },
    { id: 31, name: 'Hưng Yên', region_id: 1 },
    { id: 32, name: 'Khánh Hòa', region_id: 2 },
    { id: 33, name: 'Kiên Giang', region_id: 3 },
    { id: 34, name: 'Kon Tum', region_id: 3 },
    { id: 35, name: 'Lai Châu', region_id: 1 },
    { id: 36, name: 'Lâm Đồng', region_id: 2 },
    { id: 37, name: 'Lạng Sơn', region_id: 1 },
    { id: 38, name: 'Lào Cai', region_id: 1 },
    { id: 39, name: 'Long An', region_id: 3 },
    { id: 40, name: 'Nam Định', region_id: 1 },
    { id: 41, name: 'Nghệ An', region_id: 1 },
    { id: 42, name: 'Ninh Bình', region_id: 1 },
    { id: 43, name: 'Ninh Thuận', region_id: 2 },
    { id: 44, name: 'Phú Thọ', region_id: 1 },
    { id: 45, name: 'Phú Yên', region_id: 2 },
    { id: 46, name: 'Quảng Bình', region_id: 2 },
    { id: 47, name: 'Quảng Nam', region_id: 2 },
    { id: 48, name: 'Quảng Ngãi', region_id: 2 },
    { id: 49, name: 'Quảng Ninh', region_id: 1 },
    { id: 50, name: 'Quảng Trị', region_id: 2 },
    { id: 51, name: 'Sóc Trăng', region_id: 3 },
    { id: 52, name: 'Tây Ninh', region_id: 3 },
    { id: 53, name: 'Thái Bình', region_id: 1 },
    { id: 54, name: 'Thái Nguyên', region_id: 1 },
    { id: 55, name: 'Thanh Hóa', region_id: 1 },
    { id: 56, name: 'Thừa Thiên-Huế', region_id: 2 },
    { id: 57, name: 'Tiền Giang', region_id: 3 },
    { id: 58, name: 'Trà Vinh', region_id: 3 },
    { id: 59, name: 'Tuyên Quang', region_id: 1 },
    { id: 60, name: 'Vĩnh Long', region_id: 3 },
    { id: 61, name: 'Vĩnh Phúc', region_id: 1 },
    { id: 62, name: 'Yên Bái', region_id: 1 }
];

module.exports = PROVINCES;
