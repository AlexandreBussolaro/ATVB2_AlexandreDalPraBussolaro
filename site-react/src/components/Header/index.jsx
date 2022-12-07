import './style.css';
import { useNavigate } from 'react-router-dom';

import imgLogo from '../../assets/img/logo.png';

export function Header() {
    const navigate = useNavigate();

    const goToPortal = () => {
        navigate('/associado');
    };

    const goToHome = () => {
        navigate('/');
    };

    return (
        <header>
            <div className="container">
                <div className="brand">
                    <img onClick={goToHome} src={imgLogo} alt="Logomarca da nossa loja" />
                </div>

                <nav>
                    <ul>
                        <li><a href="#" class="active">Início</a></li>
                        <li><a href="https://api.whatsapp.com/send?phone=5546991101363&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20stand%20do%20Bussolaro!"
                            target="_blank">Agendamentos</a></li>
                        <li><a href="#empresa">A Empresa</a></li>
                        <li><a href="#footer">Fale Conosco</a></li>
                        <li><button onClick={goToPortal}>Portal do associado</button></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}