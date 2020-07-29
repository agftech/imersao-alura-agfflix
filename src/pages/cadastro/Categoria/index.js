import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import "../index.css";
import FormField from "../../../components/FormField";

function CadastroCategoria() {
	const [categories, setCategories] = useState([]);
	const initialValues = {
		nome: "",
		descricao: "",
		cor: "",
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
		setValue(event.target.getAttribute("name"), event.target.value);
	}

	return (
		<PageDefault>
			<div>
				<h3>Nova Categoria: {values.nome}</h3>
				<br></br>
			</div>

			<form style={{ background: values.cor }} onSubmit={handleSubmit}>
				<FormField
					label='Nome da Categoria '
					type='text'
					name='nome'
					value={values.nome}
					onChange={handleChangeEvent}
				/>
				<div>
					<label>
						Descrição:
						<textarea
							type='text'
							name='descricao'
							value={values.descricao}
							onChange={handleChangeEvent}
						/>
					</label>
				</div>
				<FormField
					label='Cor '
					type='color'
					name='cor'
					value={values.cor}
					onChange={handleChangeEvent}
				/>
				<button>Cadastrar</button>
			</form>

			<h3>Categorias de Vídeo:</h3>
			<ul>
				{categories.map((category, index) => {
					return <li key={`${category}${index}`}>{category.nome}</li>;
				})}
			</ul>

			<Link as={Link} className='ButtonLink' to='/'>
				Ir para Home
			</Link>
		</PageDefault>
	);
}

export default CadastroCategoria;
