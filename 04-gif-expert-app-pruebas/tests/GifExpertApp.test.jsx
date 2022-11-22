import { fireEvent ,render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';


describe('Pruebas en <GifExpertApp />', () => {

    test('debe ser capaz de agregar nuevas categorias ', () => {
        const { container } = render( <GifExpertApp /> );
 
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
 
        fireEvent.input( input, { target: { value:'categorianueva1' } } );
        fireEvent.submit( form ); 
 
        fireEvent.input( input, { target: { value: 'categorianueva2' } } );
        fireEvent.submit( form ); 
        expect( container.getElementsByClassName('card-grid').length ).toBe( 3 );
    });
 



});