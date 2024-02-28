import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../layout/user/Layout';
import CardCarousel from '../../components/carousel/Carousel';
import CardProdutos from '../../components/cardProdutos/CardProdutos';

import './Home.css'


function Home() {
    return (
        <Layout>
            <CardCarousel />
            < CardProdutos />
        </Layout>
    )
}

export default Home
