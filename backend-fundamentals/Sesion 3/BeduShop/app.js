import {Sequelize,DataTypes} from 'sequelize';

const sequelize = new Sequelize('sqlite:db.sqlite3');

const User = sequelize.define("User",{
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    edad: DataTypes.STRING,

});


User.sync()

User.create({
    nombre: "Mario",
    correo: "eduardoat43@gmail.com",
    edad: 22
});

const usuarios = await User.findAll();
console.log(usuarios)
