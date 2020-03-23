// Creo express
const express = require('express')
const app = express()

// Defino el puerto
const port = 3000

// Middlewares
app.use(express.static('public'))

// Defino ruta y accion
app.get('/data', (request, response) => {
    const datos = {mensaje: 'Es lunes y se nota!'}
    return response.json(datos)
})

// Escuchador
app.listen(port, () => console.log(`Example app listening on port ${port}!`))