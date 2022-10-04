import {Sequelize,DataTypes} from 'sequelize';

const sequelize = new Sequelize('sqlite:db.sqlite3');

const User = sequelize.define("User",{
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    edad: DataTypes.STRING,

});

const Product = sequelize.define("Product",{
    nombre: DataTypes.STRING,
    precio: DataTypes.DOUBLE,
    descripcion: DataTypes.TEXT
});

const Venta = sequelize.define("Venta",{
    fecha: DataTypes.DATE
});


User.hasMany(Venta);
Venta.belongsTo(User);

Product.hasMany(Venta);
Venta.belongsTo(Product);

await sequelize.sync();

User.create({
    nombre: "Mario",
    correo: "eduardoat43@gmail.com",
    edad: 22
});

const usuarios = await User.findAll();
console.log(usuarios)
