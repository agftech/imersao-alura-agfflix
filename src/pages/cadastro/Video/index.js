import React from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

function CadastroVideo() {
	return (
		<PageDefault>
			<h1>Cadastro de Vídeo</h1>
			<Link as={Link} className='ButtonLink' to='/cadastro/categoria'>
				Nova Categoria
			</Link>
		</PageDefault>
	);
}

export default CadastroVideo;
