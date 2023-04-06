import React from 'react'
import Pagina from '../components/Pagina'
import { Button, Card, Col, Row } from 'react-bootstrap'

export const carros = () => {

    const carros = [
        { marca: 'Honda', modelo: 'Civic', ano: '2015', cor: 'branco', foto: 'https://s3.ecompletocarros.dev/images/lojas/274/veiculos/99198/veiculoInfoVeiculoImagesMobile/vehicle_image_1651268857_cdc679bebbe282e170ab6fe0dca8445e.jpeg' },
        { marca: 'Hyundai', modelo: 'Tucson', ano: '2012', cor: 'preto', foto: 'data:image/jpeg;base64,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' },
        { marca: 'Chevrolet', modelo: 'Onix', ano: '2016', cor: 'branco', foto: 'data:image/jpeg;base64,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' },
        { marca: 'Fiat', modelo: 'Tempra', ano: '2000', cor: 'vinho', foto: 'https://autolivraria.com.br/bc/wp-content/uploads/2020/09/Fiat-Tempra-1992-02.jpg' },
        { marca: 'Fiat', modelo: 'Marea', ano: '2001', cor: 'prata', foto: 'https://motortudo.com/wp-content/uploads/2021/05/Fiat-Marea-HLX-2.4-2.0-2021-carros-antigos-de-luxo-13.jpg' },
        { marca: 'Fiat', modelo: 'Doblo', ano: '2010', cor: 'branco', foto: 'https://seminovosrj.com.br/fotos/1713/885804/1.jpg' }
    ]

    return (
        <>
            <Pagina titulo="Carros">
                <Row md={3}>
                    {carros.map(item => (
                        <Col>
                            <Card className='mb-3'>
                                <Card.Img variant="top" src={item.foto} />
                                <Card.Body>
                                    <Card.Title>{item.marca} - {item.modelo}</Card.Title>
                                    <p>Ano: {item.ano}</p>
                                    <p>Cor: {item.cor}<Button style={{float: 'right'}} variant="primary">Detalhe</Button></p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Pagina>
        </>
    )
}

export default carros