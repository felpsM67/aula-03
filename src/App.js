import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginAluno from './telas/login-aluno';
import CadastrarAluno from './telas/cadastrar-aluno';
import ListarAlunos from './telas/listar-alunos';
import EditarAluno from './telas/editar-aluno';
import DeletarAluno from './telas/deletar-aluno';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Gestão de Alunos</h1>
        <Routes>
          <Route path="/" element={<LoginAluno />} />
          <Route path="/cadastrar-aluno" element={<CadastrarAluno />} />
          <Route path="/listar-alunos" element={<ListarAlunos />} />
          <Route path="/editar-aluno" element={<EditarAluno />} />
          <Route path="/deletar-aluno" element={<DeletarAluno />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
