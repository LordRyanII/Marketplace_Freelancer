interface header {
    title: string | any;
}


const Header = ({ title }: header) => {
    return (
        <div className="header-content" title="Dashboard">
            <h1>{title}</h1>
        </div>
    )
}

export default Header