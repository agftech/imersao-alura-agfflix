import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import '../index.css';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categories, setCategories] = useState([]);
  const initialValues = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [values, setValues] = useState(initialValues);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCategories([...categories, values]);

    setValues(initialValues);
  };

  function setValue(chave, valor) {
    // chave: nome, descricao ...
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChangeEvent(event) {
    setValue(event.target.getAttribute('name'), event.target.value);
  }

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categories';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategories(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  return (
    <PageDefault>
      <div>
        <h3>
          Nova Categoria:
          {values.nome}
        </h3>
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

      {categories.length === 5 && (
        <div>
          Loading...
        </div>
      )}
      <h3>Categorias de Vídeo:</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={`${category}${index}`}>
            {category.titulo}
          </li>
        ))}
      </ul>

      <Link as={Link} className="ButtonLink" to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
