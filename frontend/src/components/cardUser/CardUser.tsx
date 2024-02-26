import './CardUser.css';
import { NavLink } from 'react-router-dom';

function CardUser() {
    return (
        <>
            <hr />
            <div className="cardUser">
                <p className='opcoes'>
                    <NavLink to='/registro' id='opcoesUser'>
                        Cadastrar-se
                    </NavLink>

                </p>
                <p className='opcoes'>
                    <NavLink to='/login' id='opcoesUser'>
                        Login
                    </NavLink>
                </p>
            </div>


        </>

    )
}

export default CardUser