import './Header.css';

interface header {
    title: string;
}


const Header = ({ title }: header) => {
    return (
        <>
            <header>
                <h1>
                    {title}
                </h1>
            </header>
        </>

    )
}

export default Header