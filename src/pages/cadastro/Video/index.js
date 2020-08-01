import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
	const history = useHistory();
	const [categorias, setCategorias] = useState([]);
	const categoryTitles = categorias.map(({ titulo }) => titulo);
	const { handleChangeEvent, clearForm, values } = useForm({
		titulo: 'Video padrão',
		url: 'https://www.youtube.com/watch?v=jOAU81jdi-c',
		categoria: 'Front End',
	});

	useEffect(() => {
		categoriasRepository
			.getAll()
			.then((categoriasFromServer) => {
				setCategorias(categoriasFromServer);
			});
	}, []);

	function handleClearForm(event) {
		event.preventDefault();
		clearForm();
	}

	return (
		<PageDefault>

			<form onSubmit={(event) => {
				event.preventDefault();

				const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

				videosRepository.create({
					titulo: values.titulo,
					url: values.url,
					categoriaId: categoriaEscolhida.id,
				})
					.then(() => {
						console.log('Cadastrou com sucesso!');
						history.push('/');
					});
			}}
			>
				<h1>Cadastre Novo Video</h1>

				<div className="buttonsActions">
					<FormField
						label="Selecione uma Categoria"
						name="categoria"
						value={values.categoria}
						onChange={handleChangeEvent}
						suggestions={categoryTitles}
					/>
					<Button as={Link} to="/cadastro/categoria">
						Nova Categoria
          </Button>
				</div>

				<FormField
					label="Título do Vídeo"
					name="titulo"
					value={values.titulo}
					onChange={handleChangeEvent}
				/>

				<FormField
					label="URL"
					name="url"
					value={values.url}
					onChange={handleChangeEvent}
				/>
				<div className="buttonsActions">
					<Button type="submit">
						Salvar
          </Button>
					<Button type="button" onClick={handleClearForm}>
						Cancelar
          </Button>
				</div>
			</form>
			<p />
		</PageDefault>
	);
}

export default CadastroVideo;
