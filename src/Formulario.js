import React, { useState } from 'react';
import Input from './Input';

export default function Formulario({ onAdd }) {

    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");

    return (
        <div className="form">

            <Input label="Nome:" value={nome} onChange={setNome} />
            <Input label="Idade:" value={idade} onChange={setIdade} />
            <button
                onClick={() => {
 
                    onAdd({ nome, idade })
                    
                    setNome("")
                    setIdade("")
                }}
                className="adicionar">Salvar</button>
        </div>
    )
}