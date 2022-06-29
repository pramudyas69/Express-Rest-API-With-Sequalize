import { Sequelize } from 'sequelize';

//buat koneksi
const db = new Sequelize('testing','root','', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;