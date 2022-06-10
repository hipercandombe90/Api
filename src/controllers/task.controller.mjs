import Task from '../models/Task.mjs'
import {getPagination} from '../libs/getPagination.mjs'

// las tareas son endpoint

// tarea que se exporta a taskrouter para buscar
export const findAllTask = async(req, res) => {
    try{
        // toma de la url el size y page
        const {size, page, title} = req.query;
        // condicion para buscar title
        const condition = title 
        ? {
            title: {$regex: new RegExp(title), $options:"i"},
        }
        :{};
        console.log(condition)
        // llamar a la funcion getPagination y se le pasa los valores size y page
        const {limit, offset} = getPagination(page, size);
    // 13 consulta la base de datos
    const data = await Task.paginate(condition, {offset, limit});
    // limita los datos que se van a ver en la peticion
    res.json({
        totalItems: data.totalDocs,
        tasks: data.docs,
        totalPages: data.totalPages,
        currentPage: data.page -1

    });
} catch (error) {
    res.status(500).json({
        message: error.menssage || 'Something goes wrong',
    })
}
}

export const createTask = async (req, res)=> {
// chequea si tiene algo en el json title
    if (!req.body.title) {
        return res.status(400).send({message: 'Contenido no puede estar vacio'});
    }
    // 12 toma la informacion que se envio en el body
    try{
    const newTask = new Task({ 
        title: req.body.title, 
        description: req.body.description,
        done: req.body.done ? req.body.done : false     
    });
    //12  guarda el objeto en la base de datos
     await newTask.save();
    console.log(newTask)
    //12 muestra lo que el usuario envio
    console.log(req.body)
    res.json('New task created')
} catch (error) {
    res.status(500).json({
        message: error.menssage || 'No se pudo crear la tarea',
    })
}
}

export const findAllDoneTasks = async (req, res) =>{
const tasks = await Task.find({done:true})
//13  se lo devuelve al cliente
res.json(tasks)
}


export const findOneTask = async (req, res) => {
    const { id } = req.params;
    try{
    const task = await Task.findById(id);
    if (!task) 
    return res
    .status(404)
    .json({message: `Tarea con id ${ id } no existe`});
    // mensaje de error cuando no existe la tarea
    res.json(task);
}catch (error) {
    res.status(500).json({
        message: error.message || `Error devolviendo una tarea con el id ${id}`
        // mensaje de error interno
    })
}
}

export const deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id)
    res.json({
        message: 'Tarea eliminada correctamente'
    });
}

export const updateTask = async (req, res) => {
   const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
       userFindAndModify: false
   })
   res.json({message: 'Tarea actualizada'})
}