//const saludar = function saludar//(nombre) {
//    return `Hola, ${ nombre }`;

//}


const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => 'Hola mundo';

//saludar = 30;

//console.log(saludar('Goku'));

console.log(saludar2("zaira"));
console.log(saludar3("Heidi"));
console.log(saludar4());

const getUser = () => ({
    
        uid: 'ABC123',
        username: 'Zairax12'
    });

const user = getUser();
console.log(user);


//Tarea
//1. Transforma a una funcion flecha
//2. Tiene que retornar un objeto implicito
//3. Pruebas
const getUsuarioActivo = (nombre) => ({
        uid: 'mdjndj2',
        username: nombre,
    });
        


const usuarioActivo = getUsuarioActivo('Zairax');
console.log( usuarioActivo )