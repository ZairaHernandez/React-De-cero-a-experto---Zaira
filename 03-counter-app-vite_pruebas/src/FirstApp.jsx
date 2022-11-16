import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {
    //Mejor has el defaultProps, pero sino...
    // if (!title) {
    //     throw new Error('El title no existe');
    // }
   return (
    <>
      <h1 data-testid="test-title"> { title } </h1>
      {/* <code>{ JSON.stringify( newMessage ) }</code> */}
      <p>{ subTitle }</p>
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </>
  )
}


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
  // title: 'No hay título',
  name: 'Zaira Hernandez',
  subTitle: 'No hay subtítulo',
 
}

/*
const newMesage = {
  mesage: "Hola Mundo",
  title: "Zaira",
};
*/