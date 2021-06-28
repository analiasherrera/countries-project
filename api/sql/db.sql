--Creamos base de datos en postgress

CREATE DATABASE countries;

--Creamos tablas

sequalize.define('country', {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primarykey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false        
    },

    Imagen de la bandera: {
        type: DataTypes.STRING,
        allowNull: false

    },

    continente:{
        type: DataTypes.STRING,
        allowNull: false
    },

    capital: {
        type: DataTypes.String,
        allowNull: false
    },

    subregion:{
        type: DataTypes.STRING
    },

    area: {
        type: DataTypes.INTEGER
    },

    poblacion: {
      type: DataTypes.INTEGER

    }

    
})

