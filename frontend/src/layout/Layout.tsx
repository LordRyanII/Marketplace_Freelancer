import { useLocation } from 'react-router-dom';  // Importe useLocation se estiver usando o React Router
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import './Layout.css';
interface Props {

    children?: React.ReactNode;
    title?: string;
    subtitle: string
}


const Layout = ({ title, subtitle, children }: Props | any) => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    const isRegistroPage = location.pathname === '/registro';

    const shouldRenderMainPag = isLoginPage || isRegistroPage;

    return (
        <>
            <Header />
            {shouldRenderMainPag && (
                <div className="mainPag">
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                </div>
            )}
            {children}
            <Footer />
        </>
    )
}

export default Layout