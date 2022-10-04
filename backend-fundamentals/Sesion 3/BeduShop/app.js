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


User.hasMany(Venta,{foreignKey:{allowNull:false}});
Venta.belongsTo(User);

Product.hasMany(Venta,{foreignKey:{allowNull:false}});
Venta.belongsTo(Product);

await sequelize.sync();

const user = await User.create({
    nombre: "Mario Eduardo",
    correo: "eduardoat43@gmail.com",
    edad: 22
});

const producto = await Product.create({
    nombre: "Motoneta",
    precio: 11,
    descripcion: "pan"
});

const venta = await Venta.create({
    fecha: Date.now(),
    ProductId: producto.id,
    UserId: user.id
});

const usuarios = await User.findAll();
/*const borrado = await Product.destroy({
    where:{
        id:6
    }
})
console.log("Productos eliminados",borrado)*/
