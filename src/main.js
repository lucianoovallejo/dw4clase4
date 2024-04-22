//main.js
import express from 'express';
import bodyParser from 'body-parser';
const app = express ();
app.use(bodyParser.json());
const puerto = 3001;
let data = [
    { id: 1, name: 'Objeto 1'},
    { id:2, name: 'Objeto 2'},
    //Puedes agregar más objetos según sea necesario
    ];
//Ruta principal
app.get('/', (req, res) => {
res.send ('Hola, mundo con Express!');
});

//ruta de data
app.get ('/api/object' , (req, res) => {
    res.json(data);
    });

//Ruta para crear un nuevo dato
app.post ('/datos', (req, res) => {
const nuevoDato = req.body;
nuevoDato.id = data.length + 1;
data.push(nuevoDato);
res.json(nuevoDato);
});

//Ruta para eliminar un dato por su ID
app.delete('/datos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    datos = datos.filter((item) => item.id !== id);
    res.json ({ mensaje: 'Dato eliminado exitosamente' });
    });


//Iniciar el servidor
app.listen(puerto, () => {
console.log('Servidor en funcionamiento en el puerto ${puerto}');
});
