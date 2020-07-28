import React from "react";
import { FooterBase } from "./styles";
import Logo from "../../assets/agfflix.svg";

function Footer() {
	return (
		<FooterBase>
			<a href='https://www.alura.com.br/'>
				<img
					src='https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg'
					alt='Logo Alura'
				/>
			</a>
			<span> & </span>
			<a href='/'>
				<img src={Logo} className='Logo' size={20} alt='agfflix' />
			</a>
			<p>
				Orgulhosamente criado durante a{" "}
				<a href='https://www.alura.com.br/'>Imersão React da Alura</a>
			</p>
		</FooterBase>
	);
}

export default Footer;
