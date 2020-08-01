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
      <form style={{ background: values.cor }} onSubmit={handleSubmit}>
        <h2>
          Cadastre Nova Categoria:
          {values.nome}
        </h2>
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
        <div className="buttonsActions">
          <Button type="submit">
            Salvar
          </Button>
          <Button type="button">
            Cancelar
          </Button>
        </div>
      </form>

      {categorias.length === 0 && (
        <div>
          <br />
          Loading...
        </div>
      )}
      <p />
      <form>
        <h2>Categorias de Vídeo:</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>RGB Color</th>
              <th>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {categorias.map((categoria, index) => (
              <tr key={index}>
                <td>{categoria.titulo}</td>
                <td>{categoria.cor}</td>
                <td>
                  <td>
                    <Link> E</Link>
                  </td>
                  <td>
                    <Link> D</Link>
                  </td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p />
        <Button as={Link} to="/">
          Ir para Home
        </Button>
      </form>
      <p />
    </PageDefault>
  );
}

export default CadastroCategoria;
