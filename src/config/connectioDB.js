import Sequelize  from "sequelize";

const sequelize = new Sequelize('jwt', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
});

const connection = () =>{
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
}

export default connection