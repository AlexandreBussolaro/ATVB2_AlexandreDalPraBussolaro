import { createContext, useState } from "react";

//Importar as imagens
import imgArma1 from '../assets/img/armamento1.png';
import imgArma2 from '../assets/img/armamento2.png';
import imgArma3 from '../assets/img/armamento3.png';
import imgArma4 from '../assets/img/armamento4.png';
import imgArma5 from '../assets/img/armamento5.png';
import imgArma6 from '../assets/img/armamento6.png';

const objArmas = [
    {
        foto: imgArma1,
        titulo: 'REVOLVER TAURUS RT838 .38SLP INFO 6,5"',
        descricao: 'Arma de fogo modelo RT 838 6,5" Inox Fosco 38 / Taurus. Para quem busca um Revólver produzido com acabamento Inoxidado alto brilho e fosco.',
        preco: 5968.32
    },
    {
        foto: imgArma2,
        titulo: 'PISTOLA GLOCK G19X TAN CAL. 9MM',
        descricao: 'A G19X vem na cor coiote, sendo o primeiro ferrolho colorido de fábrica, finalizado com um aprimorado revestimento nPVD para evitar corrosão.',
        preco: 11267.00
    },
    {
        foto: imgArma3,
        titulo: 'RIFLE CBC PUMP ACTION .22LR OXID 18" PP',
        descricao: 'Calibre .22LR, cano 18", sistema de funcionamento Pump Action, capacidade de 15+1 disparos, coronha em polímero, receptáculo em alumínio.',
        preco: 2699.52
    },
    {
        foto: imgArma4,
        titulo: 'REVOLVER TAURUS RT85S .38SPL INFO 2"',
        descricao: ' Revólver Taurus 85 S dispensa apresentações, já que é o revólver mais popular da Taurus e um dos mais vendidos no mundo.',
        preco: 4224.00
    },
    {
        foto: imgArma5,
        titulo: 'FACA RAMBO PRETA 42,5 CM',
        descricao: 'Faca Rambo IV machete, pesada, grossa de metal com assinatura John Rambo na lâmina e gravados na bainha, com alça de perna e cinto.',
        preco: 280.00
    },
    {
        foto: imgArma6,
        titulo: 'CANIVETE BROWINING METAL',
        descricao: 'Canivete Browining Metal e um canivete parrudo, robusto e confiável! Voltado para a caça e atividades mateiras, possui cabo e lâmina em Aço Inox 440C.',
        preco: 95.90
    }
]

export const ArmasContext = createContext();

export function ArmasContextProvider(props) {

    const [armas] = useState(objArmas);

    //Retornar as armas através de um Provider
    return (
        <ArmasContext.Provider value={{ armas }}>
            {props.children}
        </ArmasContext.Provider>
    )
}