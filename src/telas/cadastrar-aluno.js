import React, { useState } from 'react';

function CriarAluno() {
  const [aluno, setAluno] = useState({
    nome: '',
    email: '',
    senha: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAluno(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!aluno.nome) newErrors.nome = 'Nome é obrigatório';
    if (!aluno.email || !/^\S+@\S+\.\S+$/.test(aluno.email)) newErrors.email = 'Email inválido';
    if (!aluno.senha || aluno.senha.length < 6) newErrors.senha = 'Senha deve ter pelo menos 6 caracteres';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Aluno Criado:', aluno);
      setSubmitted(true);
      setAluno({
        nome: '',
        email: '',
        senha: ''
      });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Cadastrar Aluno</h2>
      
      {submitted && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          Aluno cadastrado com sucesso!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Nome Completo</label>
          <input
            type="text"
            name="nome"
            value={aluno.nome}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${errors.nome ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome}</p>}
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={aluno.email}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Senha</label>
          <input
            type="password"
            name="senha"
            value={aluno.senha}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${errors.senha ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.senha && <p className="text-red-500 text-sm mt-1">{errors.senha}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
        >
          Cadastrar Aluno
        </button>
      </form>
    </div>
  );
}

export default CriarAluno;
