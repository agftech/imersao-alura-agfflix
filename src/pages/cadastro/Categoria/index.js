import React from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import "../index.css";

function CadastroCategoria() {
	return (
		<PageDefault>
			<div>
				<h1>Nova Categoria de Vídeo</h1>
				<br></br>
			</div>
			<form>
				<label>
					Nome da Categoria:
					<input type='text' />
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
