import mongoose from "mongoose";
import config from "./config.mjs";
// asincrona se maneja con promesa o callback y tiene un try catch por si hay un error
(async () => {
  try{
  // config.mongodbURL viene de config y config carga la variable de entorno
  const db = await mongoose.connect(config.mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  // muestra la direccion y la base de datos
  console.log("database is connected to", db.connection.name);
}catch (error){
  console.error(error);
}
})();
