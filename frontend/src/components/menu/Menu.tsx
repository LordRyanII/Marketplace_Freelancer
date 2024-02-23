import React, { useState } from 'react';
import { Navbar, Form, Button, Row, Col, Nav, Offcanvas, Container } from 'react-bootstrap';
import { HiMenu } from 'react-icons/hi';
import { BsSearch } from 'react-icons/bs';

function HomeMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {/* Navbar para dispositivos móveis */}
      <Navbar className="bg-body-tertiary justify-content-between sticky-top d-lg-none">
        <Container>
          <Row className="w-100">
            <Col xs="auto" className="ml-3">
              {/* Botão hamburguer para expandir as opções de menu à esquerda */}
              <Button variant="link" onClick={handleMenuToggle}>
                <HiMenu size={30} />
              </Button>
            </Col>
          </Row>
        </Container>
      </Navbar>

      {/* Navbar para dispositivos de tamanho médio ou maior */}
      <Navbar className="bg-body-tertiary justify-content-between sticky-top d-md-block d-lg-block">
        <Container>
          <Row className="w-100">
            <Col xs="auto" className="ml-3">
              {/* Botão hamburguer para expandir as opções de menu à esquerda */}
              <Button variant="link" onClick={handleMenuToggle} className="d-none d-lg-block">
                <HiMenu size={30} />
              </Button>
            </Col>
            <Col xs="auto" className="mx-auto">
              {/* Nome da marca ao meio */}
              <Navbar.Brand href="#home">
                <span id='Nomemarca'>Nicolau Underground store</span>
              </Navbar.Brand>
            </Col>
            <Col xs="auto" className="mr-1 d-none d-lg-block">
              {/* Barra de pesquisa com botão de envio e ícone de lupa (não aparece em dispositivos móveis) */}
              <Form>
                <div className="d-flex">
                  <Form.Control type="text" placeholder="Search" className="mr-sm-1" />
                  <Button type="submit" variant="outline-success">
                    <BsSearch />
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </Navbar>

      {/* Opções de menu lateral */}
      <Offcanvas show={showMenu} onHide={handleMenuToggle} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Opções</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav defaultActiveKey="/" className="flex-column">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Dicas de modas do Nicolas</Nav.Link>
            <Nav.Link href="#link">Trocas</Nav.Link>
            <Nav.Link href="#link">Quem somos</Nav.Link>
            <Nav.Link href="#link">Contato</Nav.Link>
            {/* Adicione a opção de pesquisa apenas em dispositivos móveis */}
            <Form className="d-lg-none">
              <div className="d-flex">
                <Form.Control type="text" placeholder="Search" className="mr-sm-1" />
                <Button type="submit" variant="outline-success">
                  <BsSearch />
                </Button>
              </div>
            </Form>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default HomeMenu;
