const express = require('express')
const app = express()

app.use(express.static('images'))

const port = 3001

app.listen(port, () => {
  console.log(`Servidor de imágenes en funcionamiento en el puerto ${port}`)
})
