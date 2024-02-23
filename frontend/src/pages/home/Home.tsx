import Header from '../../components/header/Header';
import CardCarousel from '../../components/carousel/Carousel';
import CardProdutos from '../../components/cardProdutos/CardProdutos';
import Footer from '../../components/footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {

    return (
        <>
            <Header />
            <CardCarousel />
            <br />
            <br />
            < CardProdutos />
            <br />
            <br />
            <Footer />
        </>
    )
}

export default Home
