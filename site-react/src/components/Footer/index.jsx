import './style.css';

export function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-company">
                        <p className="footer-logo">Bussolaro Armamentos</p>
                        <p>Nossa Loja de armas está em constante desenvolvimento e crescimento, buscamos junto ao mercado internacional as melhores mercadorias para sanar as necessidades dos nossos clientes, podendo assim atende-los a prontamente.</p>
                    </div>

                    <div className="footer-menu">
                        <p className="footer-menu-title">Nossa Empresa</p>
                        <ul>
                            <li><a href="#empresa">Sobre nós</a></li>
                            <li><a href="#clientes">Depoimentos</a></li>
                        </ul>
                    </div>

                    <div className="footer-menu">
                        <p class="footer-menu-title">Contato</p>
                        <ul>
                            <li><a href="https://api.whatsapp.com/send?phone=5546991101363&text=Olá!" target="_blank">+55
                                (46) 9 9110-1363</a></li>
                            <li>Rua Fulano de tál, 666</li>
                            <li>Pato Branco - PR</li>
                        </ul>
                    </div>

                    <div className="footer-menu">
                        <p className="footer-menu-title">Nossos Parceiros</p>
                        <ul>
                            <li><a href="https://www.facebook.com/GeneralArmas/" target="_blank">General Armas e Clube de
                                Tiro</a></li>
                            <li><a href="https://www.ctpb.org.br/" target="_blank">CTPB - Clube de Tiro Pato Branco</a></li>
                            <li><a href="https://clubeaustin.com.br/" target="_blank">Austin Clube de Tiro</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-social">
                    <span className="facebook"></span>
                    <span className="instagram"></span>
                </div>

                <p className="footer-copyright">
                    &#169; 2022 - Todos os direitos reservados
                </p>
            </div>
        </footer>
    )
}