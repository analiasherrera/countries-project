const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Country= sequelize.define('country', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
  },

  name: {
      type: DataTypes.STRING,
      allowNull: false        
  },

  Imagen: {
      type: DataTypes.STRING,
      allowNull: false

  },

  continente:{
      type: DataTypes.STRING,
      allowNull: false
  },

  capital: {
      type: DataTypes.STRING,
      allowNull: false
  },

  subregion:{
      type: DataTypes.STRING
  },

  area: {
      type: DataTypes.STRING
  },

  poblacion: {
    type: DataTypes.STRING

  }  
  },{
      sequelize,
      modelName: "country",
      timestamps: false
  });
  Country.beforeValidate(country =>{
    country.poblacion = parseInt(country.poblacion);
    });

  Country.beforeValidate(country =>{
        country.area = parseInt(country.area);
    });

};
