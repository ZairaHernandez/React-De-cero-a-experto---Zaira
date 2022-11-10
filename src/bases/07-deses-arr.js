const personajes = ['Goku','Vegeta', 'Trunks'];
const [, , p3] = personajes;
console.log( p3 );
const retornaArreglo = () => {
    return ['ABC', 123];
}
const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros)

// Tarea
// 1. el primer valor del arr se llamara Nombre
// 2. Se llamará setNombre |
const usoState = (valor) => {
  return [valor, ()=>{console.log('hola mundo')} ];
}

const [ nombre, setNombre ] = usoState( 'Goku' );
console.log(nombre);
setNombre();