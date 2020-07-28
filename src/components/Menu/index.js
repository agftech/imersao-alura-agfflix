import React from "react";
import Logo from "../../assets/agfflix.svg";
import "./Menu.css";
import Button from "../../components/Button";

function Menu() {
	return (
		<nav className='Menu'>
			<a href='/'>
				<img src={Logo} className='Logo' alt='agfflix' />
			</a>

			<Button as='a' className='ButtonLink' href='/'>
				Novo Vídeo
			</Button>
		</nav>
	);
}

export default Menu;
