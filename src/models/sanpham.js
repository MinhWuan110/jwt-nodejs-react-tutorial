'use strict';
module.exports = (sequelize, DataTypes) => {
  const SanPham = sequelize.define('SanPham', {
    MaSanPham: {
      type: DataTypes.STRING(50),
      primaryKey: true,
    },
    TenSanPham: {
      type: DataTypes.STRING(100),
    },
    Gia: {
      type: DataTypes.DECIMAL(10, 2),
    },
    Image: {
      type: DataTypes.STRING(255),
    },
  
    SoLuong: {
      type: DataTypes.INTEGER,
    },

    TrangThai: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'SanPham',
    timestamps: true, // Tự động thêm createdAt và updatedAt
  });

  

  return SanPham;
};