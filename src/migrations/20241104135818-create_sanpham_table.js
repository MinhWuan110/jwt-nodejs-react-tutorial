'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SanPham', {
      MaSanPham: {
        type: Sequelize.STRING(50),
        primaryKey: true,
      },
      TenSanPham: {
        type: Sequelize.STRING(100),
      },
      Gia: {
        type: Sequelize.DECIMAL(10, 2),
      },
      Image: {
        type: Sequelize.STRING(255),
      },
      SoLuong: {
        type: Sequelize.INTEGER,
      },
      TrangThai: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('SanPham');
  },
};