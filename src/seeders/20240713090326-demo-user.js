'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('user', [
      {
        email: 'John Doe',
        password: '123',
        username: 'fake1'
    
      },
       {
        email: 'John Doe',
        password: '123',
        username: 'fake2'
    
      },
       {
        email: 'John Doe',
        password: '123',
        username: 'fake3'
    
      }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
