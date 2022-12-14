import './style.css';

const motivos = [
    { valor: '+500', rotulo: 'Armamentos'},
    { valor: '+500', rotulo: 'Clientes'},
    { valor: '+50', rotulo: 'Premiações'},
    { valor: '+50', rotulo: 'Especialistas'}
];


export function SectionMotives() {

    return (

        <section id="reasons">
            <h2>Por que nos Escolher?</h2>

            <div className="reasons-content">

                {motivos.map((item, index) => (
                    <div key={index} className="reason">
                        <p className="reason-value">{ item.valor }</p>
                        <p className="reason-label">{ item.rotulo }</p>
                    </div>
                ))}

            </div>
        </section>

    )

}