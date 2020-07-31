import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/agfflix-404.svg';
import PageDefault from '../../components/PageDefault';

function Page404() {
	return (
		<PageDefault>
			<Link
				to="/"
				style={{
					textAlign: 'center',
					display: 'block',
					margin: 'auto',
					width: '100%',
				}}
			>
				<img
					src={Logo}
					width="40%"
					height="50%"
					alt="Clique para voltar para Home!"
				/>
			</Link>
		</PageDefault>
	);
}

export default Page404;
