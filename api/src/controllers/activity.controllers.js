const {Country, Activity} = require('../db');

 const addActivity= async (req,res) => {
     
   const {id,nombre, dificultad, duracion, temporada} = req.body;
  try {
   const createActivity = await Activity.create({
       nombre,
       dificultad,
       duracion,
       temporada
   },{
       fields: ['nombre', 'dificultad', 'duracion', 'temporada']
   });
   await createActivity.setCountries(id)
   if(createActivity) {    
      res.json({            
         message: "Activity created successfully",
         data: createActivity
       })
   } 

  } catch (error) {
      console.log(error)
      res.status(500).json({
          message: error,
          data:{}
      })
      
  }
} 

module.exports = {addActivity} 