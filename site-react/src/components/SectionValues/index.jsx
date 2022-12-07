import './style.css'

import imgLogo from '../../assets/img/img-loja.jpg';

export function SectionValues() {
    return (

        <section id="empresa">
            <h2>Quem é a Bussolaro Armamentos?</h2>

            <div className="empresa-container">
                <img src={imgLogo} alt="Foto da loja de armas" />

                <div className="empresa-content">
                    <p>A Bussolaro Armamentos foi criada com a intenção de comercializar carabinas, pistolas, rifles e, também, acessórios para este segmento, buscando atender todos os apreciadores e praticantes do tiro esportivo.</p>

                    <p>Foi pensando em expandir e incentivar o esporte em nosso país, que nasceu a idéia de entrarmos neste mercado. A necessidade de desenvolver um site comercial que dê muita credibilidade junto a todos nossos clientes.</p>
                    
                    <p>A Bussolaro Armamentos está sempre pronta a atendê-los.</p>

                    <div className="empresa-detail">
                        <div className="empresa">
                            <span>Alto Padrão</span>
                            <span Style="margin-right: 35px;">Agilidade</span>
                        </div>

                        <div className="empresa">
                            <span>Facilidade</span>
                            <span>Confiabilidade</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}