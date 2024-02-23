import { Carousel } from 'react-bootstrap';

// Importe suas imagens aqui ou forneça os URLs diretamente
import FirstImage from './imgs/lil_peep_wallpaper_pt_ii_by_luvsickk_deynfpu-fullview.jpg';
import SecondImage from './imgs/rebel-bingo-2.jpg';
import ThirdImage from './imgs/undergroundo-rock-pub-show-chevette-hatch.jpg';

function CardCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={FirstImage} alt="First slide" />
                <Carousel.Caption>
                    <h3>Moda Peep</h3>
                    <p>Adquira peças no estilo peep e único de ser, panos do Nicolau você encontra isso e muito mais</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={SecondImage} alt="Second slide" />
                <Carousel.Caption>
                   
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={ThirdImage} alt="Third slide" />
                <Carousel.Caption>
                    {/* <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CardCarousel;
