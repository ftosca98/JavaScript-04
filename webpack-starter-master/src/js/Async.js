
//Forma Async
export const buscarHeroeAsync = async(id ) => {

    const heroe = heroes[id];

        if( heroe) {
            return heroe;
        } else { 
          throw Error`no existe un heroe con el id ${id}`;
        }
   
}