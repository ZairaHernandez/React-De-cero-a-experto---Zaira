//Desestructuracion
//Asignación desestructurante

const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'njnj21',

};

//const { nombre, edad, clave } = persona;

//console.log((nombre));
//console.log((edad));
//console.log((clave));
//console.log(persona.edad);
//console.log(persona.clave);

const usoContext = (clave, nombre, edad, rango = 'Capitan') => {
    //console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latting: {
            lat: 16.444,
            lng: -442.2
        }
    }
}

const {nombreClave, anios, latting:{lat, lng}} = usoContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);