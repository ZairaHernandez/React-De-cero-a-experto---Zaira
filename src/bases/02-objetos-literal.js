const persona = {
    nombre: "Zaira",
    apellido: 'Hernandez',
    edad: 20,
    direccion: {
        ciudad: 'Coatzacoalcos',
        zip: 987678,
        lat: 96.8765,
        lng: 34.66785
    }
};

//console.table(persona);
const persona2 = { ...persona}
console.log({ persona });

//const persona2 = persona;
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);