import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Layout from '../../layout/user/Layout';
import './Login.css'

function Login() {
    return (
        <Layout title='Bem-vindo' subtitle='Faça login e continue aproveitando as novidades:)'>
            <div className="container-register">
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Seu email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" style={{ borderRadius: '20px' }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Password" style={{ borderRadius: '20px' }} />
                        <p style={{textAlign:'right'}}>
                            Esqueceu a senha? <Link to='/login'>Recuperar senha</Link>
                        </p>

                    </Form.Group>
                </Form>
                <Row className="justify-content-center mt-5">
                    <Col xs={12} sm={4}>
                        <button id='btnLogin'>
                            LOGIN
                        </button>

                    </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                    <Col xs={12} sm={4}>
                        <p>
                            Não possuí uma conta? <Link to='/login'>Crie uma</Link>
                        </p>

                    </Col>
                </Row>


            </div>

        </Layout>
    )
}

export default Login