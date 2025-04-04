import React from 'react';

function ListarAlunos() {
  // Exemplo de lista de alunos, isso poderia vir de uma API.
  const alunos = [
    { id: 1, nome: 'João',  },
    { id: 2, nome: 'Maria',  },
    { id: 3, nome: 'Pedro', },
  ];

  return (
    <div>
      <h2>Lista de Alunos</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>

            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno) => (
            <tr key={aluno.id}>
              <td>{aluno.nome}</td>

              <td>
                <button onClick={() => alert(`Editando: ${aluno.nome}`)}>Editar</button>
                <button onClick={() => alert(`Deletando: ${aluno.nome}`)}>Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarAlunos;
