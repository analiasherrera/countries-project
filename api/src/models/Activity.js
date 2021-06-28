const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Activity= sequelize.define('activity', {   

    nombre: {
        type: DataTypes.STRING

    },

    dificultad: {
        type: DataTypes.ENUM("1", "2", "3", "4", "5")
        

    },

    duracion: {
        type: DataTypes.INTEGER
    },

    temporada:{
        type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera")   

    }
  
  }, {
      sequelize,
      modelName: "activity",
      timestamps: false
});
};