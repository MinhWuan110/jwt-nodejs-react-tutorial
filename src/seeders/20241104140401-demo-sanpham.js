'use strict';
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dcfflbfsg',
  api_key: '225155499128668',
  api_secret: 'tXRQ4tcoXeYOaZFxAdSswzmGSeE'
});

async function getCloudinaryImages() {
  try {
    let allResources = [];
    let nextCursor = null;

    do {
      const response = await cloudinary.api.resources({
        max_results: 50,
        next_cursor: nextCursor,
        type: 'upload', // Chỉ định loại tài nguyên
        prefix: 'samsung/', // Chỉ định thư mục
      });

      allResources = allResources.concat(response.resources);
      nextCursor = response.next_cursor;
    } while (nextCursor);

    return allResources.map(resource => ({
      MaSanPham: `SP${String(resource.public_id).padStart(3, '0')}`,
      TenSanPham: `Sản phẩm ${resource.public_id}`,
      Gia: Math.floor(Math.random() * 10000000) + 1000000,
      Image: resource.secure_url,
      SoLuong: Math.floor(Math.random() * 100) + 1,
      TrangThai: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }));
  } catch (error) {
    console.error('Lỗi khi lấy danh sách ảnh:', error);
    return [];
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const products = await getCloudinaryImages();
    await queryInterface.bulkInsert('SanPham', products, {});
    console.log('Đã thêm tất cả sản phẩm vào cơ sở dữ liệu!');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('SanPham', null, {});
  },
};