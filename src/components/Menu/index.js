import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/agfflix.svg";
import "./Menu.css";
import Button from "../Button";

function Menu() {
	return (
		<nav className='Menu'>
			<Link to='/'>
				<img src={Logo} className='Logo' alt='agfflix' />
			</Link>

			<Button as={Link} className='ButtonLink' to='/cadastro/video'>
				Novo Vídeo
			</Button>
		</nav>
	);
}

export default Menu;
