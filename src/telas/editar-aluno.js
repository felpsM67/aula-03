import React, { useState } from 'react';

function EditarAluno() {
  const [nome, setNome] = useState('');
  const [id, setid] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Aluno Editado: ${nome}, ${id}`);
  };

  return (
    <div>
      <h2>Editar Aluno</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>id:</label>
          <input
            type="number"
            value={id}
            onChange={(e) => setid(e.target.value)}
            required
          />
        </div>
        <button type="submit">Editar Aluno</button>
      </form>
    </div>
  );
}

export default EditarAluno;
