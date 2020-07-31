import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import '../index.css';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const initialValues = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChangeEvent, values, clearForm } = useForm(initialValues);
  const [categorias, setCategorias] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCategorias([...categorias, values]);
    clearForm();
  };

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://agfflix.herokuapp.com/categorias';
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <div>
        <h2>
          Nova Categoria:
          {values.nome}
        </h2>
        <br />
      </div>

      <form style={{ background: values.cor }} onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria "
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChangeEvent}
        />
        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChangeEvent}
        />
        <FormField
          label="Cor "
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChangeEvent}
        />
        <Button>Cadastrar</Button>
      </form>

      {categorias.length === 0 && (
        <div>
          <br />
          Loading...
        </div>
      )}
      <h2>Categorias de Vídeo:</h2>
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link as={Link} className="ButtonLink" to="/">
        Ir para Home
      </Link>
      <p />
    </PageDefault>
  );
}

export default CadastroCategoria;
