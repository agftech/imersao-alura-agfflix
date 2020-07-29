import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import "../index.css";

function CadastroCategoria() {
	const [nomeDaCategoria, setNomeDaCategoria] = useState("Filmes");
	//console.log("[nomeDaCategoria]", nomeDaCategoria);

	//useEffect;

	const handleNewVideoCategory = (event) => {
		setNomeDaCategoria(event.target.value);
	};

	return (
		<PageDefault>
			<div>
				<h1>Nova Categoria de Vídeo: {nomeDaCategoria}</h1>
				<br></br>
			</div>
			<form>
				<label>
					Nome da Categoria:
					<input
						type='text'
						value={nomeDaCategoria}
						onChange={handleNewVideoCategory}
					/>
				</label>
				<button>Cadastrar</button>
			</form>
			<Link as={Link} className='ButtonLink' to='/'>
				Ir para Home
			</Link>
		</PageDefault>
	);
}

export default CadastroCategoria;
