import instagramIcone from './imgs/icons8-instagram-150.png'
import facebookIcone from './imgs/icons8-facebook-100.png'
import { NavLink } from 'react-bootstrap';
import './Footer.css'

function Footer() {
  return (
    <>
      <footer style={{ padding: '20px' }}>
        <p style={{ textAlign: 'center' }}>&copy; 2024 - My Company Nicolau Underground store</p>
        <div className='info-imagens' style={{ textAlign: 'center', margin: 'auto' }}>
          <a href="https://google.com" target='_blank' title='Nos siga no instagram '>
            <img src={instagramIcone} alt="" style={{ width: "100px", height: "auto" }} />
          </a>
          <a href="#" target='_blank' title='Visite o nosso perfil na facebok'>
            <img src={facebookIcone} alt="" style={{ width: "100px", height: "auto" }} />
          </a>
        </div>
        <br />
        <p style={{ textAlign: 'right' }}>&copy; Feito por Ryan Menezes Dev</p>
      </footer>
    </>
  );
}

export default Footer;
