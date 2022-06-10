// a penas se ejecuta el proyecto carga la variable de entorno .env
import {config} from 'dotenv'
config();

export default {
    // en caso que no exista que utilice una conexion local de mongodb
    mongodbURL: process.env.MONGODB_URI || 'mongdb://Localhost/tasksdb',
};