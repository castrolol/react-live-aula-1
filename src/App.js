import React, { useState, useCallback } from 'react';
import Formulario from './Formulario';
import Tabela from './Tabela';
import './style.css';

function App() {

  const [pessoas, setPessoas] = useState([]);

  const handleRemove = useCallback((pessoa) => {
    const novasPessoas = pessoas.filter(p => p !== pessoa);
    setPessoas(novasPessoas)
  }, [pessoas])


  return (
    <>
      <Formulario onAdd={(pessoa) => setPessoas([...pessoas, pessoa])} />
      <Tabela pessoas={pessoas} onRemove={handleRemove} />
    </>
  );

}

export default App;
