import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css'
import Layout from '../../layout/user/Layout';

function Register() {
    return (
        <Layout title='Cadastre-se' subtitle='Salve os seus dados para compras e futuras compras em nosso site.'>
            <div className="container-register">
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label >Email</Form.Label>
                            <Form.Control style={{ borderRadius: '20px' }} type="email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" style={{ borderRadius: '20px' }} placeholder="minímo 8 caracteres" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control style={{ borderRadius: '20px' }} placeholder="1234 Main Street" />
                    </Form.Group>


                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Cidade</Form.Label>
                            <Form.Control style={{ borderRadius: '20px' }} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Estado</Form.Label>
                            <Form.Control style={{ borderRadius: '20px' }} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Cep</Form.Label>
                            <Form.Control style={{ borderRadius: '20px' }} />
                        </Form.Group>
                    </Row>
                 
                    <Row className="justify-content-center mt-5">
                        <Col xs={12} sm={4}>
                            <button id='btnRegister'>
                                REGISTRAR-SE
                            </button>

                        </Col>
                    </Row>
                    <br />
                    <p>
                        Já possuí uma conta? <Link to='/login'>Iniciar sessão</Link>
                    </p>

                </Form>

            </div>

        </Layout>
    )
}

export default Register