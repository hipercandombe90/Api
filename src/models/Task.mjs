import pkg from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const {Schema, model} =pkg;

// busca schema(modelo) en import mongoose
const taskSchema = new Schema({
title: {
    type: String,
    required: true,
    // trim elimina los espacios
    trim: true
},
description: {
    type: String,
    trim: true
},
done: {
    type: Boolean,
    default: false 
},   
}, {
    // muestra la fecha que se creo y update
    timestamps: true,
    // versionKey elimina el __
    versionKey: false
});

// importar plugin
taskSchema.plugin(mongoosePaginate);

// te da un objeto con caracteristicas
export default model('Tasks', taskSchema)