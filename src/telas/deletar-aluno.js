import React, { useState } from 'react';

function DeletarAluno() {
  const [nome, setNome] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Aluno Deletado: ${nome}`);

  };

  return (
    <div>
      <h2>Deletar Aluno</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome do Aluno:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        <div>
        </div>  
        </div>
        <button type="submit">Deletar Aluno</button>
      </form>
    </div>
  );
}

export default DeletarAluno;
