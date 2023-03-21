let express = require('express'); //charger le modules express
let bodyparser = require('body-parser'); //charger le modules body-parser
const { request } = require('express');
let app = express();
let port = 3000;



//express
app.use('/views', express.static(__dirname+'/views')); //redirect views
app.use(express.static(__dirname+"/www")); //pour reconnaitre le dossier /www
app.use('/js',express.static(__dirname+"/node_modules/bootstrap/dist/js"));
app.use('/js',express.static(__dirname+"/node_modules/jquery/dist/js"));
app.use('/css',express.static(__dirname+"/node_modules/bootstrap/dist/css"));

app.set('view engine', 'ejs');


//body parser use
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());


let myobject={
    nom:"nom objet",
    valeur:10
}

app.listen(port, ()=>{
    console.log('Le serveur est en route');
    console.log(`Serveur listening at https://localhost:${port}`);
})

app.get('/', (req, res, next)=>{
    
    //res.sendFile('/www/index.html');//permet de relier de fichier index au serveur
    const nom = res.locals.nom;
    let object ={valeur: nom} 
    res.render('index.ejs', { monobjet: object});
    console.log(nom);    
})
app.get('/page2', (req, res, next)=>{ // le '/page2' permet de def la lien vers la page cibler  
    res.render('page2.ejs');  
})
app.post('/page2', (req, res, next)=>{ // utilisation de la méthode post pour recup la valuer du input
    const nom = req.body.name;
    res.locals.nom = nom;
    let object ={valeur: nom} 
    console.log('oui= '+nom);
    res.redirect('/');//redirige vers la page de son choix
})



