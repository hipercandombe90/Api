// se encarga de la paginacion modulo mongoose-pagination-v2

export const getPagination = (page, size) => {
    // mostrar la cantidad de paginas
    const limit = size ? +size : 3;
    // mostrar el numero de pagina (salto de pagina)
    const offset = page ? page * limit:0;
    return {limit, offset}
}