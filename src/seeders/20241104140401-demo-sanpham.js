'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('SanPham', [
      {
        MaSanPham: 'SP001',
        TenSanPham: 'Điện thoại XYZ',
        Gia: 10000000.00,
        Image: 'https://res.cloudinary.com/dcfflbfsg/image/upload/v1728482822/dienthoai/phone-1.jpg',
        SoLuong: 50,
        TrangThai: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        MaSanPham: 'SP002',
        TenSanPham: 'Điện thoại ABC',
        Gia: 15000000.00,
        Image: 'https://res.cloudinary.com/dcfflbfsg/image/upload/v1728482822/dienthoai/phone-1.jpg',
        SoLuong: 30,
        TrangThai: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        MaSanPham: 'SP003',
        TenSanPham: 'Điện thoại DEF',
        Gia: 12000000.00,
        Image: 'https://res.cloudinary.com/dcfflbfsg/image/upload/v1728482822/dienthoai/phone-1.jpg',
        SoLuong: 20,
        TrangThai: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('SanPham', null, {});
  },
};