const express = require ("express");
const app = express ();

app.get ("users, function (req, res) {
    res.send ("hola mundo")
});

app.listen (3000, () => {
    console.log ("servidor corriendo en puerto 3000")
}); 