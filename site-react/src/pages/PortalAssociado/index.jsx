import './style.css';
import imgManutencao from '../../assets/img/manutencao.svg';

export function PortalAssociado() {
    return (
        <div id="about">
            <img className="img-manutencao" src={imgManutencao}></img>
            <h1>Nosso portal do associado ficará pronto em breve...</h1>
        </div>
    )
}