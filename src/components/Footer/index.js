import React from "react";
import { Link } from "react-router-dom";
import { FooterBase } from "./styles";
import Logo from "../../assets/agfflix.svg";

function Footer() {
	return (
		<FooterBase>
			<div style={{ dislay: "flex", flexDirection: "space-between" }}>
				<a href='https://www.alura.com.br/'>
					<img
						src='https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg'
						alt='Logo Alura'
					/>
				</a>
				<Link to='/'>
					<img
						src={Logo}
						className='Logo'
						width='50%'
						height='32px'
						alt='agfflix'
					/>
				</Link>
			</div>
			<p>
				Orgulhosamente criado durante a{" "}
				<a href='https://www.alura.com.br/'>Imersão React da Alura</a>
			</p>
		</FooterBase>
	);
}

export default Footer;
