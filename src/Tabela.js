import React from 'react';


export default function Tabela({ pessoas, onRemove }) {

    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th width="30px">
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {pessoas.map(pessoa => (
                        <tr>
                            <td>{pessoa.nome}</td>
                            <td>{pessoa.idade}</td>
                            <td>
                                <button onClick={() => onRemove(pessoa)}>
                                    [x]
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}