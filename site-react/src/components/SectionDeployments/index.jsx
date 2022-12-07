import './style.css';

const clientes = [
    {
        nome: 'Danilo Martins',
        cidade: 'Brasil',
        descricao: 'Melhor loja de armas do Brasil, preço muito top, atendimento ótimo, atenção muito grande com o cliente, super recomendo!'
    },
    {
        nome: 'Edilson Peres',
        cidade: 'Brasil',
        descricao: 'Ótima loja de armas!! Atendimento muito bom, funcionários prestativos e atenciosos. Realmente preocupados com o cliente!'
    },
    {
        nome: 'Paulo Roberto',
        cidade: 'Brasil',
        descricao: 'Sensacional extremamente satisfeito com o atendimento e com os prazos pessoal altamente qualificado.'
    }
];

export function SectionDeployments() {
    return (
        <section id="clientes">
            <h2>Depoimentos de clientes</h2>
            <div className="clientes-content">

                {clientes.map((item, index) => (
                    <div key={index} className="cliente">
                        <h5>{item.nome}</h5>
                        <p>{item.cidade}</p>
                        <p className="cliente-detail">{item.descricao}</p>
                    </div>
                ))}

            </div>
        </section>
    )
}