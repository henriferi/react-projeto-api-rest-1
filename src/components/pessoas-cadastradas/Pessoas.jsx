import react, { useEffect, useState } from "react";
import "./Pessoas.css";
import api from "../../services/api";


export default function Pessoas() {

    const [resposta, setResposta] = useState([]);
    var valor = [];
    const [botao, setBotao] = useState(true);

    useEffect(() => {
        api.get("")
        .then((resp) => setResposta(resp.data.results))
        .catch((erro) => {console.log("erro")})
    },[botao]);
    
    valor = resposta.slice(0, 10);


    return(
        <>
        <h1>Pessoas Cadastradas</h1>
        <button onClick={() => {botao ? setBotao(false) : setBotao(true)}}>Clique para gerar novos usuários</button>
        <div className="flex">
            {valor.map(resp => {
                return <div id ="container">
                        <img src={resp.picture.large} alt="perfil das pessoas" />
                        <p id="nome"><span>Nome:</span> {resp.name.first} {resp.name.last}</p>
                        <p id="idade"><span>Idade:</span> {resp.dob.age}</p>  
                </div>
            })}
        </div>
        </>

    );

}