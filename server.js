let express = require('express'); //charger le modules express
let app = express();
let port = 3000;

app.set('view engine', 'ejs');

app.use('/view', express.static(__dirname+'/view')); //redirect views
app.use(express.static(__dirname+"/www")); //pour reconnaitre le dossier /www
app.use('/js',express.static(__dirname+"/node_modules/bootstrap/dist/js"));
app.use('/js',express.static(__dirname+"/node_modules/jquery/dist/js"));
app.use('/css',express.static(__dirname+"/node_modules/bootstrap/dist/css"));

app.listen(port, ()=>{
    console.log('Le serveur est en route');
    console.log(`Serveur listening at https://localhost:${port}`);
})

app.get('/', (req, res, next)=>{
    //res.sendFile('/www/index.html');//permet de relier de fichier index au serveur
    res.render('index.ejs');    
})


