// tiene la configuración del servidor
import express from "express";
//4
import TasksRoutes from "./routes/tasksroutes.mjs";
// middelware para ver las peticiones que llegan
import morgan from 'morgan'
import cors from 'cors'

// 
const app = express();

// estos son middlewares {
//para reconocer metodos json / siempre tiene que estar primero
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
//acepta metodos de envio html
app.use(express.urlencoded({extended: false}))

//}
// usar el import de router
app.use("/api/tasks", TasksRoutes);

// 2
app.set("port", 3000);

//3
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido" });
});

export default app;
