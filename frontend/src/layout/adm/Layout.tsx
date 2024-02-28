import Header from "../../components/header/adm/Header";
// import Footer from "../../components/footer/adm/Footer";
// import './Layout.css';

interface Layout {
    children: React.ReactNode;

}


const Layout = ({ children }: Layout) => {

    return (
        <>
            <Header title='Dashboard nimu.co' />
            {children}

        </>
    )
}

export default Layout