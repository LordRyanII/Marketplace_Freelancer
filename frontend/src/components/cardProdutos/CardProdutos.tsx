import { Card, CardGroup } from 'react-bootstrap';
import camiseta1 from './assets/imgs/camisetaMetro.jpeg';
import camiseta2 from './assets/imgs/camiseta.jpeg';
import camiseta3 from './assets/imgs/camiseta-stone-sour-blusa-corey-taylor.jpeg';
import camiseta4 from './assets/imgs/corey-taylor-slipnot-cancela-turne-saude-mental.jpeg';

import './assets/css/CardProdutos.css';

function CardProdutos() {
    // Dados de exemplo
    const produtos = [
        { id: 1, imagem: camiseta1, titulo: 'T-shirt pop show', descricao: 'Camiseta underground kpop' },
        { id: 2, imagem: camiseta2, titulo: 'T-shirt celebrity of chaos', descricao: 'Moda Bruno mars' },
        { id: 1, imagem: camiseta3, titulo: 'Stone sour t-shirt', descricao: 'Camiseta stone sour corey taylor, unisex' },
        { id: 2, imagem: camiseta2, titulo: 'T-shirt pop show', descricao: 'Descrição do produto 2' },
        { id: 1, imagem: camiseta4, titulo: 'Camiseta preta do melhor vocalista de metal', descricao: 'Camiseta do Corey fuck taylor, o brabo!' },
    ];

    return (
        <>
            <div className="titulo" style={{ textAlign: 'center' }}>
                <h2 className="tituloProduto">Compre agora</h2>
            </div>
            <br />
            <CardGroup style={{ display: 'flex', flexWrap: 'wrap', margin: '50px' }}>
                {produtos.map((produto) => (
                    <Card key={produto.id} style={{ width: '18rem', margin: '10px', textAlign:'center' }} id='card-img'>
                        <Card.Img variant="top" src={produto.imagem} />
                        <Card.Body>
                            <Card.Title>{produto.titulo}</Card.Title>
                            <Card.Text>{produto.descricao}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                ))}
            </CardGroup>
        </>
    );
}

export default CardProdutos;
