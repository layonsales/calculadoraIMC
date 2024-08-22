import { useState } from "react";
import Styles from './Formulario.module.css'

const Formulario = () => {
    let [peso, setPeso] = useState(0)
    let [altura, setAltura]= useState(0)
    const [imc, setImc] = useState(null);
    const [classificacao, setClassificacao] = useState('');

    const calcularIMC = () => {
        const alturaMetros = altura / 100;
        const imcCalculado = (peso / (alturaMetros * alturaMetros)).toFixed(2);
        setImc(imcCalculado);
        setClassificacao(classificarIMC(imcCalculado));
    };

    const classificarIMC = (imc) => {
        if (imc < 18.5) return 'Abaixo do peso';
        if (imc >= 18.5 && imc < 24.9) return 'Peso normal';
        if (imc >= 25 && imc < 29.9) return 'Sobrepeso';
        if (imc >= 30 && imc < 34.9) return 'Obesidade grau I';
        if (imc >= 35 && imc < 39.9) return 'Obesidade grau II';
        if (imc >= 40) return 'Obesidade grau III';
        return '';
      };

    return(
        <div className={Styles.container}>
            <form action="">
                <input type="number" id="peso" placeholder="Informe seu peso" onChange={evento => setPeso(parseInt(evento.target.value))} />
                <input type="number" id="altura" placeholder="Informe sua altura" onChange={evento => setAltura(parseInt(evento.target.value))}/>
            </form>
            <button onClick={calcularIMC}>Calcular IMC</button>

            <div>
                <h2>Seu IMC: {imc}</h2>
                <p>Classificação: {classificacao}</p>
            </div>
        </div>
    )
}

export default Formulario