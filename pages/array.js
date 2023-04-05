import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Container } from 'react-bootstrap'
import Cabecalho from '../components/Cabecalho'
import Pagina from '../components/Pagina';

const array = () => {

    const carros = ['Onix', 'Jetta', 'Fusion', 'Celta', 'Gol', 'Up TSI']

    return (
        <>
            <Pagina titulo="Arrays">
                <Container>

                    <ol>
                    {carros.map(item => (
                            <li>{item}</li>
                    ))}
                    </ol>
                    
                </Container>
            </Pagina>

            {/*<Cabecalho />
            <div className='bg-secondary py-3 text-white text-center mb-3'>
                <Container>
                    <h1 className='display-4'>Array</h1>
                </Container>
            </div>
            <h1 className='text-danger text-center'>Hello World!</h1>

            <div style={{width: '100%'}} className='bg-secondary position-fixed bottom-0 py-3 text-white text-center'>
                <p>Todos os diretos reservados®</p>
    </div>*/}
        </>
    )
}

export default array