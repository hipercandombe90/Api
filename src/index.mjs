// arranca la app y llama a la base de datos
import app from './app.mjs'
import './database.mjs'

// 1
app.listen(app.get('port'));
console.log('Server on port', app.get('port'));