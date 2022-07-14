//aqui creamos una base de datos de un objeto
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

//callback retorna...
export const buscarHeroe = (id, callback ) => {
    const heroe = heroes[id]; //aqui mandamos a buscar el id dentro del objeto.
    callback(heroe);


}