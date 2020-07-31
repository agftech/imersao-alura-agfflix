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
	const { handleChangeEvent, values } = useForm({
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

	return (
		<PageDefault>
			<h1>Cadastro de Video</h1>

			<form onSubmit={(event) => {
				event.preventDefault();
				// alert('Video Cadastrado com sucesso!!!1!');

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

				<FormField
					label="Categoria"
					name="categoria"
					value={values.categoria}
					onChange={handleChangeEvent}
					suggestions={categoryTitles}
				/>

				<Button type="submit">
					Cadastrar
        </Button>
			</form>

			<br />
			<br />

			<Link className="ButtonLink" to="/cadastro/categoria">
				Cadastrar Categoria
      </Link>
			<p />
		</PageDefault>
	);
}

export default CadastroVideo;
