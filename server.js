let express = require('express'); //charger le modules express
let app = express();
let port = 3000;

app.use(express.static(__dirname+"/www"));

app.listen(port, ()=>{
    console.log('Le serveur est en route');
    console.log(`Serveur listening at https://localhost:${port}`);
})

app.get('/', (req, res, next)=>{
    res.sendFile('/www/index.html');
})