const heroes = {
    capi: {
        nombre: "capitan america",
        poder: "usar el escudo"
    },

    iron: {
        nombre: "Ironman",
        poder: "disparar laser con sus manos"
    },

    spider: {
        nombre: "spiderman",
        poder: "tirar tela de araña"
    },
}

//aqui creamos la funcion buscarHeroes.
export const buscarHeroe = (id ) => {

    const heroe = heroes[id];


    //aqui hacemos el return de una promesa
    //las promesas reciben dos argumentos que son opcionales. ej resolve(correctamente) y reject(rechaza).
    return new Promise( (resolve,reject) => {  //aqui ponemos la funcion que que queremos ejecutar

        if( heroe) {//si el heroe existe mandamos a llamar  resolve la promesa heroe en este caso.
            resolve( heroe);
        } else { // en caso que no lo encuentre, que no sea un heroe mandamos reject.
          reject(`no existe un heroe con el id ${id}`);
        }
   

    }); 
}

//Forma Async
export const buscarHeroeAsync = async(id ) => {

    const heroe = heroes[id];

        if( heroe) {
            return heroe;
        } else { 
          throw Error`no existe un heroe con el id ${id}`;
        }
   
}