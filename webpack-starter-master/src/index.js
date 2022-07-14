//callback: es una funcion llamada como argumento.
import { buscarHeroe } from "./js/callbacksss";

//import { buscarHeroe, buscarHeroeAsync} from "./js/promesas";
//import { buscarHeroe} from "./js/promesas";
import './styles.css';
//aqui buscamos de forma promise y async.

//buscarHeroe( "capi").then(heroe => console.log(heroe) );
//buscarHeroeAsync( "iron").then(heroe => console.log(heroe) );



//aqui creamos una constante
 const heroeId1 = "capi";
 const heroeId2 = "spider";

 //funcion para el callbacks
buscarHeroe( heroeId1, (heroe) => { //aqui creamos una funcion buscarhHeroe luego mandamos a buscar como primer argumento "heroeId" luego creamos una funcion flecha

   console.log(heroe);  
});

//funcion para promesas

//buscarHeroe(heroeId1).then(heroe => {
//    console.log(`Enviando a ${heroe.nombre} a la mision`);
//});
console.log("fin del programa");