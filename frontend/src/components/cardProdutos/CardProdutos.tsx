import { Card, CardGroup } from 'react-bootstrap';
import camiseta1 from './assets/imgs/camisetaMetro.jpeg';
import camiseta2 from './assets/imgs/camiseta.jpeg';
import './assets/css/CardProdutos.css';

function CardProdutos() {
    // Dados de exemplo
    const produtos = [
        { id: 1, imagem: camiseta1, titulo: 'Card title', descricao: 'Descrição do produto 1' },
        { id: 2, imagem: camiseta2, titulo: 'Card title', descricao: 'Descrição do produto 2' },
        { id: 1, imagem: camiseta1, titulo: 'Card title', descricao: 'Descrição do produto 1' },
        { id: 2, imagem: camiseta2, titulo: 'Card title', descricao: 'Descrição do produto 2' },
        { id: 1, imagem: camiseta1, titulo: 'Card title', descricao: 'Descrição do produto 1' },
    ];

    return (
        <>
            <div className="titulo" style={{ textAlign: 'center' }}>
                <h2 className="tituloProduto">Compre agora</h2>
            </div>
            <br />
            <br />
            <br />
            <CardGroup style={{ display: 'flex', flexWrap: 'wrap' }}>
                {produtos.map((produto) => (
                    <Card key={produto.id} style={{ width: '18rem', margin: '10px' }}>
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
