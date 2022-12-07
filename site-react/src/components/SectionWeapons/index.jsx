import { IntlProvider, FormattedNumber } from 'react-intl';
import { useArmas } from '../../hook/useArmas';

import './style.css';


export function SectionWeapons() {

    const { armas } = useArmas();

    return (
        <section id="cards">

            <h2>Conheça nossos armamentos</h2>

            <div className="cards-content">
                {armas.map((item, index) => (
                    <div key={index} className="card">
                        <img src={item.foto} alt={'Armamento ' + index} />
                        <div className="card-content">
                            <h4>{item.titulo}</h4>
                            <p>{item.descricao}</p>
                            <div className="card-price">
                                <p>
                                    <IntlProvider locale="pt-BR">
                                        <FormattedNumber value={item.preco}
                                            style="currency"
                                            currency="BRL" />
                                    </IntlProvider>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}